import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderClient from "@/components/Header";
import { fetchUser } from "@/lib/api";
import { cookies } from "next/headers";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webhost",
  description: "Le meilleur hébergeur web",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("webhost-token")?.value;

  const user = await fetchUser(cookie);

  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <HeaderClient user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
