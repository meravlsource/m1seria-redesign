import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const einaBold = localFont({
  src: "./fonts/Eina-01-Semi-Bold.otf",
  variable: "--font-einaBold",
  weight: "500 800",
});

const einaSemiBold = localFont({
  src: "./fonts/Eina-01-Semi-Bold.otf",
  variable: "--font-einaSemiBold",
  weight: "600",
});


export const metadata: Metadata = {
  title: "m1seria",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${einaBold.variable} ${einaSemiBold.variable} antialiased`}
style={{ fontFamily: 'var(--font-einaSemiBold)' }}
      >
        {children}
      </body>
    </html>
  );
}
