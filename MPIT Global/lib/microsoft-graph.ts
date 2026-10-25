import { ClientSecretCredential } from "@azure/identity";

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

/**
 * Escapes characters to prevent HTML injection in emails.
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates that all required Microsoft Graph environment variables are set.
 */
function getGraphConfig() {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
  const senderEmail = process.env.MICROSOFT_SENDER_EMAIL;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  const missing: string[] = [];
  if (!tenantId) missing.push("MICROSOFT_TENANT_ID");
  if (!clientId) missing.push("MICROSOFT_CLIENT_ID");
  if (!clientSecret) missing.push("MICROSOFT_CLIENT_SECRET");
  if (!senderEmail) missing.push("MICROSOFT_SENDER_EMAIL");
  if (!recipientEmail) missing.push("CONTACT_RECIPIENT_EMAIL");

  if (missing.length > 0) {
    throw new Error(
      `Missing required Microsoft Graph environment variables: ${missing.join(", ")}`
    );
  }

  return {
    tenantId: tenantId!,
    clientId: clientId!,
    clientSecret: clientSecret!,
    senderEmail: senderEmail!.trim(),
    recipientEmail: recipientEmail!.trim(),
  };
}

/**
 * Generates an OAuth2 access token for Microsoft Graph API using Client Credentials flow.
 */
async function getAccessToken(
  tenantId: string,
  clientId: string,
  clientSecret: string
): Promise<string> {
  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
  const tokenResponse = await credential.getToken("https://graph.microsoft.com/.default");

  if (!tokenResponse || !tokenResponse.token) {
    throw new Error("Failed to acquire access token from Microsoft Entra ID.");
  }

  return tokenResponse.token;
}

/**
 * Builds HTML formatted email content for the contact inquiry.
 */
function buildHtmlBody(data: ContactEmailPayload): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeCompany = data.company ? escapeHtml(data.company) : "Not specified";
  const safeService = escapeHtml(data.service);
  const safeBudget = data.budget ? escapeHtml(data.budget) : "Not specified";
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");
  const timestamp = new Date().toUTCString();

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission - MPIT Global</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1B365D 0%, #0c1626 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
                MPIT <span style="color: #38A3DC;">Global</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 13px;">
                New Website RFP & Contact Inquiry
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 28px;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #0f172a; border-bottom: 2px solid #38A3DC; padding-bottom: 8px; display: inline-block;">
                Prospect Overview
              </h2>

              <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; margin-bottom: 24px; border-collapse: collapse;">
                <tr style="background-color: #f8fafc;">
                  <td width="35%" style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Full Name</td>
                  <td style="color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email Address</td>
                  <td style="border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${safeEmail}" style="color: #38A3DC; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Company / Org</td>
                  <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${safeCompany}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Requested Service</td>
                  <td style="color: #1B365D; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${safeService}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Budget Range</td>
                  <td style="color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${safeBudget}</td>
                </tr>
              </table>

              <h2 style="margin: 20px 0 12px 0; font-size: 16px; color: #0f172a;">
                Project Goals & Message:
              </h2>
              <div style="background-color: #f8fafc; border-left: 4px solid #38A3DC; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155;">
                ${safeMessage}
              </div>

              <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                Received on: ${timestamp} &bull; Directly via MPIT Global Contact Form
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Sends an email using the Microsoft Graph sendMail endpoint.
 * POST https://graph.microsoft.com/v1.0/users/{EMAIL_USER}/sendMail
 */
export async function sendContactEmailViaGraph(data: ContactEmailPayload): Promise<void> {
  const config = getGraphConfig();

  // Obtain access token via Client Credentials flow
  const accessToken = await getAccessToken(
    config.tenantId,
    config.clientId,
    config.clientSecret
  );

  // Format recipient list (supports comma-separated emails in CONTACT_RECIPIENT_EMAIL)
  const recipientAddresses = config.recipientEmail
    .split(",")
    .map((e) => e.trim())
    .filter((e) => e.length > 0);

  const toRecipients = recipientAddresses.map((email) => ({
    emailAddress: {
      address: email,
    },
  }));

  const subject = `[Website RFP] ${data.service} Inquiry from ${data.name} (${data.company || "Direct"})`;
  const htmlContent = buildHtmlBody(data);

  const requestBody = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: htmlContent,
      },
      toRecipients,
      replyTo: [
        {
          emailAddress: {
            address: data.email,
            name: data.name,
          },
        },
      ],
    },
    saveToSentItems: true,
  };

  const endpoint = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
    config.senderEmail
  )}/sendMail`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    let errorDetails = "Unknown Microsoft Graph error";
    let graphMessage = "";
    try {
      const errJson = await response.json();
      errorDetails = JSON.stringify(errJson);
      graphMessage = errJson?.error?.message || "";
    } catch {
      errorDetails = await response.text();
    }

    // Server-side diagnostic log without exposing secrets or tokens
    console.error(
      `[Microsoft Graph API Error] Status: ${response.status} ${response.statusText}. Response: ${errorDetails}`
    );

    throw new Error(
      graphMessage
        ? `Microsoft Graph error (${response.status}): ${graphMessage}`
        : `Microsoft Graph API request failed with status ${response.status}`
    );
  }
}
