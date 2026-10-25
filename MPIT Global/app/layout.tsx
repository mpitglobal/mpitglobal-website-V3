import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "MPIT Global | Meta Progressive Innovation Technology – Digital Transformation & Engineering",
    template: "%s | MPIT Global",
  },
  description:
    "MPIT Global (Meta Progressive Innovation Technology) is a premier technology partner delivering Digital Marketing, UI/UX Design, SEO, Web Development, Mobile Apps, and Enterprise IT Consulting.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "MPIT Global",
    "Meta Progressive Innovation Technology",
    "Digital Transformation",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Services",
    "Digital Marketing",
    "IT Consulting",
    "Cloud Architecture",
  ],
  authors: [{ name: "MPIT Global" }],
  creator: "MPIT Global",
  publisher: "MPIT Global",
  metadataBase: new URL("https://mpitglobal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mpitglobal.com",
    title: "MPIT Global | Meta Progressive Innovation Technology",
    description:
      "Transforming Ideas into Digital Innovation. Full-spectrum digital services, high-performance web platforms, and mobile apps.",
    siteName: "MPIT Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPIT Global | Meta Progressive Innovation Technology",
    description: "Transforming Ideas into Digital Innovation.",
    creator: "@mpitglobal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('mpit_theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] dark:bg-[#070B14] text-[#1E293B] dark:text-[#F1F5F9] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
