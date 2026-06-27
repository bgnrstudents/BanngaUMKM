import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "./fonts";

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
    <html
      lang="id"
      className={`scroll-smooth ${plusJakartaSans.variable}`}
    >
      <body
        className="min-h-screen bg-white text-slate-900 antialiased selection:bg-brand-medium/10 selection:text-brand-medium font-plus-jakarta"
      >
        {children}
      </body>
    </html>
  );
}
