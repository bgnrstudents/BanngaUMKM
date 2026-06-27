import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bangga UMKM - Kelola Usaha Lebih Cerdas",
  description: "Catat transaksi, pantau kondisi usaha secara real-time, dan dapatkan insight bisnis serta audit keuangan berbasis AI dalam satu platform terintegrasi. Dirancang khusus untuk pemilik warung, kedai kopi, toko kelontong, dan usaha rumahan.",
  keywords: ["UMKM", "Aplikasi Keuangan UMKM", "AI Business Consultant", "AI Financial Auditor", "Pencatatan Keuangan Digital", "Transformasi Digital Indonesia", "SaaS UMKM", "Bangga UMKM"],
  authors: [{ name: "Tim Bangga UMKM" }],
  openGraph: {
    title: "Bangga UMKM - Kelola Usaha Lebih Cerdas",
    description: "Catat transaksi, pantau kondisi usaha secara real-time, dan dapatkan insight bisnis serta audit keuangan berbasis AI dalam satu platform terintegrasi.",
    type: "website",
    locale: "id_ID",
    url: "https://banggaumkm.id",
    siteName: "Bangga UMKM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans min-h-screen bg-white text-slate-900 antialiased selection:bg-brand-medium/10 selection:text-brand-medium`}
      >
        {children}
      </body>
    </html>
  );
}
