import { NextRequest, NextResponse } from "next/server";
import { sendContactEmailViaGraph } from "@/lib/microsoft-graph";
import { checkRateLimit } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0].trim();
    if (ip) return ip;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown-client";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // Rate Limiting: Allow up to 5 contact submissions per 15 minutes per IP
    const rateLimit = checkRateLimit(ip, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a few minutes before submitting another inquiry.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      honeypot,
    } = body || {};

    // Spam Trap: Honeypot check
    // If a bot fills out this invisible field, return a fake success so it stops trying
    if (honeypot && typeof honeypot === "string" && honeypot.trim().length > 0) {
      console.warn(`[Anti-Spam] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Your message has been dispatched successfully.",
      });
    }

    // Server-Side Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long (maximum 100 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid corporate or personal email address." },
        { status: 400 }
      );
    }
    if (email.length > 120) {
      return NextResponse.json(
        { error: "Email address is too long (maximum 120 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a project overview or inquiry message (minimum 5 characters)." },
        { status: 400 }
      );
    }
    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 4000 characters)." },
        { status: 400 }
      );
    }

    const sanitizedPayload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim().slice(0, 30) : undefined,
      company: typeof company === "string" ? company.trim().slice(0, 120) : undefined,
      service: typeof service === "string" && service.trim().length > 0 ? service.trim().slice(0, 100) : "General Inquiry",
      budget: typeof budget === "string" ? budget.trim().slice(0, 50) : undefined,
      message: message.trim(),
    };

    // Dispatch email through Microsoft Graph API
    await sendContactEmailViaGraph(sanitizedPayload);

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting MPIT Global. Your inquiry has been sent successfully.",
    });
  } catch (error: any) {
    // Log server-side diagnostic details without exposing internal tokens or credentials
    console.error("[Contact API Error]:", error?.message || error);

    // Differentiate missing configuration in local/dev from standard server error
    if (error?.message?.includes("Missing required Microsoft Graph environment variables")) {
      return NextResponse.json(
        {
          error: "Email service configuration is incomplete on the server. Please verify your environment variables.",
        },
        { status: 503 }
      );
    }

    if (error?.message?.includes("Microsoft Graph error")) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        error: "We could not deliver your message at this time. Please try again later or reach out directly via email.",
      },
      { status: 500 }
    );
  }
}
