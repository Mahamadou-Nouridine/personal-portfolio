import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/scss/bootstrap.scss";
import "flag-icons/css/flag-icons.min.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";
import type { Metadata } from "next";

import PageWrapper from "./components/PageWrapper";

import { LanguageNotice } from "./components/DevelopmentNotice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mahamadou Nouridine | Software Developer",
    template: "%s | Mahamadou Nouridine",
  },
  description:
    "My Name is Mahamadou Nouridine, I'm a junior software developer aiming to bring success in whatever I'm involved in. Specialized in full-stack development with Next.js and NestJS.",
  keywords: ["Software Developer", "Full Stack Developer", "Next.js", "React", "Nouridine", "Niger"],
  authors: [{ name: "Mahamadou Nouridine" }],
  creator: "Mahamadou Nouridine",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nouridine.com",
    title: "Mahamadou Nouridine | Software Developer",
    description: "Junior software developer aiming to bring success in whatever I'm involved in.",
    siteName: "Nouridine Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/ddayqmsfs/image/upload/v1697407794/my%20portfolio/standed-fotor-bg-remover-20230926213924-fotor-20230926215051_a7tny9.png",
        width: 1200,
        height: 630,
        alt: "Mahamadou Nouridine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahamadou Nouridine | Software Developer",
    description: "Junior software developer aiming to bring success in whatever I'm involved in.",
    creator: "@Nouridine_Dino",
    images: ["https://res.cloudinary.com/ddayqmsfs/image/upload/v1697407794/my%20portfolio/standed-fotor-bg-remover-20230926213924-fotor-20230926215051_a7tny9.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/ddayqmsfs/image/upload/v1697407794/my%20portfolio/standed-fotor-bg-remover-20230926213924-fotor-20230926215051_a7tny9.png"
          sizes="any"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <NextTopLoader color="#ffda6b" />
        {/* <LanguageNotice /> */}
        <NextIntlClientProvider messages={messages}>
          {/* <DevelopmentNotice /> */}
          <ToastContainer />
          <main>
            <Sidebar />
            <div className="main-content">
              <Navbar local={locale} />
              <PageWrapper>{children}</PageWrapper>
            </div>
          </main>
        </NextIntlClientProvider>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="lazyOnload"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
