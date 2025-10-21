import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from "@/app/store/Provider";
import AuthPersistence from "@/app/components/AuthPersistence";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SFProDisplay/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFProDisplay/SFProDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFProDisplay/SFProDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IL Prezzo Giusto",
  description: "Find the best supermarket deals in Italy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${figtree.variable} ${sfProDisplay.variable} font-figtree antialiased`}
      >
        <ReduxProvider>
          <AuthPersistence />
          <div className="max-w-[575px] w-full mx-auto">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
