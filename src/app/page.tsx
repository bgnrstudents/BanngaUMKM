"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Brain,
  FileText,
  TrendingUp,
  MessageSquare,
  Landmark,
  ShieldCheck,
  Check,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Users,
  Activity,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Monitor scrolling to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "problems", "solutions", "features", "how-it-works", "pricing", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) {
      setModalMessage("Silakan masukkan email Anda terlebih dahulu.");
    } else {
      setModalMessage(`Terima kasih! Undangan pendaftaran telah dikirim ke ${emailInput}. Kami akan segera menghubungi Anda saat MVP siap dideploy.`);
      setEmailInput("");
    }
    setShowDemoModal(true);
  };

  const handleGeneralCTA = () => {
    setModalMessage("Pendaftaran Bangga UMKM gratis! Silakan isi email Anda di bagian bawah halaman untuk mendapatkan akses prioritas (Early Access) atau hubungi tim kami.");
    setShowDemoModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Image
              src="/logo.svg"
              alt="Bangga UMKM Logo"
              width={160}
              height={45}
              priority
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className={`text-sm font-medium transition-colors hover:text-brand-medium ${
                activeSection === "home" ? "text-brand-medium font-semibold" : "text-slate-600"
              }`}
            >
              Beranda
            </a>
            <a
              href="#features"
              className={`text-sm font-medium transition-colors hover:text-brand-medium ${
                activeSection === "features" ? "text-brand-medium font-semibold" : "text-slate-600"
              }`}
            >
              Fitur
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors hover:text-brand-medium ${
                activeSection === "pricing" ? "text-brand-medium font-semibold" : "text-slate-600"
              }`}
            >
              Harga
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-brand-medium ${
                activeSection === "about" ? "text-brand-medium font-semibold" : "text-slate-600"
              }`}
            >
              Tentang Kami
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={handleGeneralCTA}
              className="inline-flex items-center justify-center rounded-full bg-brand-medium px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-medium/10 transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-medium/20 active:scale-95"
            >
              Daftar Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white p-4 shadow-xl md:hidden animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 ${
                  activeSection === "home" ? "bg-blue-50 text-brand-medium font-semibold" : "text-slate-600"
                }`}
              >
                Beranda
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 ${
                  activeSection === "features" ? "bg-blue-50 text-brand-medium font-semibold" : "text-slate-600"
                }`}
              >
                Fitur
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 ${
                  activeSection === "pricing" ? "bg-blue-50 text-brand-medium font-semibold" : "text-slate-600"
                }`}
              >
                Harga
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 ${
                  activeSection === "about" ? "bg-blue-50 text-brand-medium font-semibold" : "text-slate-600"
                }`}
              >
                Tentang Kami
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGeneralCTA();
                }}
                className="mt-2 w-full rounded-full bg-brand-medium py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-brand-dark"
              >
                Daftar Gratis
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-24">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-sky-50/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Copywriting & CTA */}
            <div className="space-y-6 lg:col-span-6 lg:pr-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-brand-medium">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Rencana Bisnis IBAC 2026 - Tahap MVP</span>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                Kelola Usaha Lebih Cerdas Bersama <span className="bg-gradient-to-r from-brand-medium to-brand-light bg-clip-text text-transparent">Bangga UMKM</span>
              </h1>
              
              <p className="text-base text-slate-600 sm:text-lg leading-relaxed max-w-lg">
                Catat transaksi, pantau kondisi usaha, dan dapatkan insight bisnis berbasis AI dalam satu platform yang super sederhana untuk siapa saja.
              </p>
              
              {/* Target Users Icons */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Dirancang untuk kebutuhan:</p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1">🏪 Toko & Warung</span>
                  <span className="flex items-center gap-1">☕ Kedai Kopi</span>
                  <span className="flex items-center gap-1">🍎 Toko Kelontong</span>
                  <span className="flex items-center gap-1">🍳 Usaha Rumahan</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <button
                  onClick={handleGeneralCTA}
                  className="inline-flex items-center justify-center rounded-full bg-brand-medium px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-medium/20 transition-all hover:bg-brand-dark hover:shadow-xl active:scale-95"
                >
                  Daftar Gratis
                </button>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                >
                  Lihat Fitur
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Dashboard Mockup */}
            <div className="relative lg:col-span-6 animate-fade-in">
              <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                {/* Decorative border outline to make mockup look embedded in a browser */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02] animate-float">
                  {/* Browser Header Bar dots */}
                  <div className="mb-2 flex items-center gap-1.5 px-2.5 pt-1">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-4 text-[10px] font-medium text-slate-400">app.banggaumkm.id/dashboard</span>
                  </div>
                  
                  {/* SVG Dashboard Mockup */}
                  <Image
                    src="/dashboard-mockup.svg"
                    alt="Mockup Dashboard Bangga UMKM"
                    width={800}
                    height={550}
                    priority
                    className="h-auto w-full rounded-lg"
                  />
                </div>
                
                {/* Floating Insight Pill Overlay */}
                <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:flex items-center gap-3 max-w-xs animate-float [animation-delay:2s]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Kenaikan Laba</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Laba bersih usaha meningkat +12.4% di bulan ini!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <section id="problems" className="border-y border-slate-200 bg-slate-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-medium">Tantangan Bisnis</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Masalah yang Sering Dihadapi UMKM
            </h3>
            <p className="text-base text-slate-600">
              Tanpa alat bantu yang tepat, banyak pelaku usaha mikro kesulitan untuk berkembang dan bertahan.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Masalah 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">Pencatatan Masih Manual</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Pemasukan dan pengeluaran masih dicatat di kertas. Rawan hilang, salah hitung, dan sulit dilacak.
              </p>
            </div>

            {/* Masalah 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-100">
                <TrendingUp className="h-6 w-6" transform="rotate(90)" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">Sulit Memahami Kondisi Usaha</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Sulit memprediksi laba bersih, kas yang tersedia, atau barang apa yang paling laris setiap bulannya.
              </p>
            </div>

            {/* Masalah 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-medium transition-colors group-hover:bg-blue-100">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">Kurang Konsultasi Bisnis</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Menyewa konsultan bisnis profesional terlalu mahal untuk skala UMKM, membuat keputusan bisnis sering ditebak-tebak.
              </p>
            </div>

            {/* Masalah 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100">
                <Landmark className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">Sulit Pembiayaan Modal</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Tidak punya laporan keuangan formal membuat bank/kreditur ragu memberikan tambahan modal usaha.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION --- */}
      <section id="solutions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left: Solution Info */}
            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                <span>Solusi Cerdas Kami</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Mengubah Cara Anda Mengelola Bisnis
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Bangga UMKM mendemokrasikan teknologi pencatatan keuangan dan kecerdasan buatan (AI) agar dapat dinikmati oleh pemilik warung kecil tanpa perlu keahlian teknis.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Solusi 1 */}
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-medium">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Pencatatan Sekali Klik</h5>
                    <p className="text-sm text-slate-500">Desain antarmuka minimalis seperti aplikasi chatting, mempermudah entri data harian secara cepat.</p>
                  </div>
                </div>

                {/* Solusi 2 */}
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-medium">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Asisten Bisnis AI 24/7</h5>
                    <p className="text-sm text-slate-500">Tanyakan apa pun tentang strategi promosi, pengelolaan stok, dan optimasi harga langsung ke asisten AI.</p>
                  </div>
                </div>

                {/* Solusi 3 */}
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-medium">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Kredibilitas Skor Finansial</h5>
                    <p className="text-sm text-slate-500">Bangun profil reputasi keuangan digital Anda otomatis untuk mengajukan pinjaman mikro resmi.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Premium Mockup Graphic */}
            <div className="relative lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-medium/5 to-blue-200/20 p-8 border border-blue-100">
                {/* Card representation inside */}
                <div className="rounded-xl bg-white p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-brand-medium" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Transformasi UMKM</span>
                    </div>
                    <span className="text-xs font-bold text-brand-medium">Model Freemium</span>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="space-y-2 rounded-lg bg-slate-50 p-4 border border-slate-100">
                      <div className="text-xs font-semibold text-slate-400">SEBELUMNYA</div>
                      <div className="text-sm font-bold text-slate-700">Pencatatan Konvensional</div>
                      <ul className="text-xs text-slate-500 space-y-1.5 pt-1">
                        <li className="flex items-center gap-1.5">❌ Catat buku kertas manual</li>
                        <li className="flex items-center gap-1.5">❌ Hitung laba manual di akhir bulan</li>
                        <li className="flex items-center gap-1.5">❌ Buta terhadap tren penjualan</li>
                        <li className="flex items-center gap-1.5">❌ Data keuangan acak-acakan</li>
                      </ul>
                    </div>

                    <div className="space-y-2 rounded-lg bg-blue-50/50 p-4 border border-blue-100/50">
                      <div className="text-xs font-semibold text-brand-medium">SEKARANG BERSAMA KAMI</div>
                      <div className="text-sm font-bold text-brand-dark">Pencatatan Pintar Digital</div>
                      <ul className="text-xs text-brand-dark/85 space-y-1.5 pt-1">
                        <li className="flex items-center gap-1.5 text-brand-medium">✅ Entri digital instan &amp; aman</li>
                        <li className="flex items-center gap-1.5 text-brand-medium">✅ Dashboard laba bersih otomatis</li>
                        <li className="flex items-center gap-1.5 text-brand-medium">✅ Konsultan AI &amp; Audit otomatis</li>
                        <li className="flex items-center gap-1.5 text-brand-medium">✅ Skor reputasi kredit siap ekspor</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-lg bg-slate-900 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-medium/20 text-brand-light">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-400">Didukung Google Gemini</div>
                        <div className="text-sm font-bold">Teknologi AI Kelas Dunia</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-light">Tersedia Sekarang</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-medium">Fitur Utama</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Teknologi Canggih dengan Kemudahan Penggunaan
            </h3>
            <p className="text-base text-slate-600">
              Setiap fitur kami bangun dengan prinsip kesederhanaan, disesuaikan untuk pengguna non-teknis.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Fitur 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-medium transition-colors group-hover:bg-blue-100">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">Dashboard Keuangan</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Lihat grafik perkembangan laba/rugi, pemasukan, dan pengeluaran secara real-time. Informasi disajikan secara visual dan sangat mudah dipahami.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-brand-medium group-hover:underline">
                <span>Pelajari selengkapnya</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>

            {/* Fitur 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-blue-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">Premium</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100">
                <Brain className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">AI Business Consultant</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Punya pertanyaan bisnis seperti trik diskon atau manajemen stok? Tanyakan pada asisten AI kami yang terlatih khusus untuk mendampingi UMKM.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-purple-600 group-hover:underline">
                <span>Pelajari selengkapnya</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>

            {/* Fitur 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-blue-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">Premium</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">AI Financial Auditor</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                AI akan memindai riwayat transaksi Anda secara otomatis untuk mendeteksi pengeluaran mencurigakan, inefisiensi, atau margin keuntungan yang menipis.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-emerald-600 group-hover:underline">
                <span>Pelajari selengkapnya</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>

            {/* Fitur 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-blue-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">Premium</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                <Star className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-slate-900">UMKM Trust Score</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Sistem penilaian kesehatan finansial otomatis berskala 0-100 berdasarkan konsistensi pencatatan Anda. Mempermudah verifikasi kredit modal usaha.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-amber-600 group-hover:underline">
                <span>Pelajari selengkapnya</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-medium">Langkah Sederhana</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cara Mudah Memulai Digitalisasi
            </h3>
            <p className="text-base text-slate-600">
              Tidak ada proses setup yang rumit. Hubungkan bisnis Anda dan biarkan sistem bekerja.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="mt-16 relative">
            {/* Connector line for desktop */}
            <div className="absolute top-1/2 left-4 right-4 hidden h-1 -translate-y-1/2 bg-slate-100 lg:block z-0" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
              
              {/* Step 1 */}
              <div className="rounded-xl bg-white p-6 text-center space-y-3 border border-slate-100 shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-medium text-white font-bold">1</div>
                <h4 className="font-bold text-slate-950">Daftar Akun</h4>
                <p className="text-xs text-slate-500">Buat akun gratis dalam waktu 1 menit hanya dengan nama dan nomor WhatsApp Anda.</p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-white p-6 text-center space-y-3 border border-slate-100 shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-medium text-white font-bold">2</div>
                <h4 className="font-bold text-slate-950">Catat Transaksi</h4>
                <p className="text-xs text-slate-500">Masukkan transaksi penjualan atau pembelian harian dengan tampilan input super ringkas.</p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-white p-6 text-center space-y-3 border border-slate-100 shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-medium text-white font-bold">3</div>
                <h4 className="font-bold text-slate-950">Pantau Dashboard</h4>
                <p className="text-xs text-slate-500">Sistem otomatis menghitung laba bersih dan menyajikannya dalam grafik yang informatif.</p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-white p-6 text-center space-y-3 border border-slate-100 shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-medium text-white font-bold">4</div>
                <h4 className="font-bold text-slate-950">Dapatkan Insight AI</h4>
                <p className="text-xs text-slate-500">Asisten AI memindai data keuangan Anda untuk memberikan saran optimasi keuntungan.</p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-white p-6 text-center space-y-3 border border-slate-100 shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-medium text-white font-bold">5</div>
                <h4 className="font-bold text-slate-950">Kembangkan Usaha</h4>
                <p className="text-xs text-slate-500">Gunakan skor kesehatan finansial untuk akses modal usaha dan perluas jaringan bisnis Anda.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-medium">Paket Harga</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Harga Sederhana Tanpa Biaya Tersembunyi
            </h3>
            <p className="text-base text-slate-600">
              Pilih paket yang paling pas untuk skala operasional bisnis Anda. Batalkan kapan saja.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 items-stretch">
            
            {/* Paket Gratis */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Paket Gratis</h4>
                  <p className="mt-1 text-sm text-slate-500">Cocok untuk usaha pemula yang baru memulai digitalisasi pembukuan.</p>
                </div>

                <div className="flex items-baseline text-slate-900">
                  <span className="text-4xl font-extrabold tracking-tight">Rp0</span>
                  <span className="ml-1 text-sm font-semibold text-slate-500">/selamanya</span>
                </div>

                <ul className="space-y-4 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>Pencatatan transaksi (Pemasukan &amp; Pengeluaran)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>Riwayat transaksi lengkap</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>Dashboard keuangan sederhana</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-400 line-through">
                    <X className="h-5 w-5 shrink-0 text-slate-300" />
                    <span>AI Business Consultant</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-400 line-through">
                    <X className="h-5 w-5 shrink-0 text-slate-300" />
                    <span>AI Financial Auditor</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-400 line-through">
                    <X className="h-5 w-5 shrink-0 text-slate-300" />
                    <span>UMKM Trust Score</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleGeneralCTA}
                  className="w-full rounded-full border border-slate-200 bg-white py-3 text-center text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95"
                >
                  Mulai Gratis
                </button>
              </div>
            </div>

            {/* Paket Premium */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-brand-medium bg-white p-8 shadow-lg shadow-brand-medium/5 transition-transform duration-300 hover:scale-[1.01]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-medium px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                Paling Populer
              </div>

              <div className="space-y-6 mt-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Paket Premium</h4>
                  <p className="mt-1 text-sm text-slate-500">Ideal untuk UMKM yang siap berkembang dengan panduan asisten AI.</p>
                </div>

                <div className="flex items-baseline text-slate-900">
                  <span className="text-4xl font-extrabold tracking-tight">Rp99.000</span>
                  <span className="ml-1 text-sm font-semibold text-slate-500">/bulan</span>
                </div>

                <ul className="space-y-4 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="font-semibold text-slate-900">Semua fitur paket Gratis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span><strong className="text-brand-medium">AI Business Consultant</strong> (Tanya jawab bisnis 24/7)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span><strong className="text-brand-medium">AI Financial Auditor</strong> (Audit margin &amp; pemborosan otomatis)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span><strong className="text-brand-medium">UMKM Trust Score</strong> (Penilaian kesehatan kredit usaha)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>Laporan &amp; Insight Bisnis Lanjutan (Siap Download PDF)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleGeneralCTA}
                  className="w-full rounded-full bg-brand-medium py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-brand-dark hover:shadow-lg active:scale-95"
                >
                  Langganan Sekarang
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TRUST SECTION --- */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Pertumbuhan Platform</h2>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Telah Dipercaya oleh Pelaku Usaha di Indonesia
            </h3>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-3 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-2 p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-brand-medium">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900">10.000+</div>
              <div className="text-sm font-semibold text-slate-500">UMKM Bergabung</div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Activity className="h-6 w-6" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900">25.000+</div>
              <div className="text-sm font-semibold text-slate-500">Transaksi Tercatat</div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 p-6 border border-slate-100 rounded-xl bg-slate-50/50">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900">98%</div>
              <div className="text-sm font-semibold text-slate-500">Kepuasan Pengguna</div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION (EARLY ACCESS) --- */}
      <section id="cta" className="bg-slate-900 py-16 text-white relative overflow-hidden">
        {/* Gradients inside CTA */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0066cc,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#00a2e8,transparent_50%)] opacity-20" />
        
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center relative z-10 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mulai Digitalisasi Usaha Anda Hari Ini
            </h3>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-slate-300">
              Bergabunglah bersama ribuan pelaku UMKM cerdas lainnya. Tingkatkan omzet dan rapikan pembukuan dalam genggaman.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegisterSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Masukkan alamat email Anda"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full rounded-full border border-slate-800 bg-slate-950/80 px-5 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-medium focus:outline-none focus:ring-2 focus:ring-brand-medium/20"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand-medium px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-light active:scale-95"
            >
              <span>Daftar Gratis</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-[11px] text-slate-500">
            * Kami menjamin privasi email Anda. Tidak ada spam. Anda akan dihubungi saat aplikasi siap dirilis secara penuh.
          </p>
        </div>
      </section>

      {/* --- FAQ SECTION (EXTRA FOR PITCHING PROPOSAL) --- */}
      <section id="faq" className="bg-white py-16 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-extrabold text-slate-900">Pertanyaan yang Sering Diajukan (FAQ)</h3>
            <p className="text-sm text-slate-500">Beberapa hal yang paling sering ditanyakan oleh calon pengguna kami.</p>
          </div>

          <div className="mt-10 space-y-4">
            
            {[
              {
                q: "Apakah data transaksi saya aman di Bangga UMKM?",
                a: "Sangat aman. Seluruh data transaksi dienkripsi dengan standar industri dan disimpan secara aman menggunakan database relasional PostgreSQL dari Supabase. Kami tidak membagikan data keuangan Anda kepada pihak ketiga tanpa izin."
              },
              {
                q: "Bagaimana cara kerja AI Business Consultant & Financial Auditor?",
                a: "Kami menggunakan teknologi API Google Gemini yang dilatih khusus dengan konteks industri UMKM Indonesia. Asisten AI membaca data transaksi pemasukan/pengeluaran Anda (tanpa detail rahasia) dan memberikan evaluasi otomatis mengenai marjin laba, efisiensi modal, serta rekomendasi promosi yang relevan secara real-time."
              },
              {
                q: "Apa itu UMKM Trust Score?",
                a: "UMKM Trust Score adalah indikator kesehatan usaha berbasis data digital berskala 0-100. Skor dihitung secara objektif menggunakan indikator konsistensi pembukuan, rasio kas, stabilitas margin, dan tren pertumbuhan. Skor ini dapat diunduh sebagai berkas PDF yang dapat digunakan untuk memperkuat proposal pinjaman atau kerja sama modal."
              },
              {
                q: "Apakah saya bisa membatalkan langganan Premium kapan saja?",
                a: "Ya. Tidak ada kontrak yang mengikat. Anda dapat beralih kembali ke Paket Gratis kapan saja melalui menu pengaturan profil. Semua data pencatatan Anda tetap tersimpan dengan aman."
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors hover:border-slate-300">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-800 text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform ${faqOpen === idx ? "rotate-90" : ""}`} />
                </button>
                {faqOpen === idx && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="about" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Bangga UMKM Logo"
              width={160}
              height={45}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-xs leading-relaxed text-slate-400">
              Platform pembukuan digital dan konsultasi bisnis berbasis AI yang dirancang khusus untuk memajukan perekonomian mikro Indonesia.
            </p>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
              IBAC 2026 Business Plan Entry
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#problems" className="hover:text-white transition-colors">Tantangan Usaha</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fitur Unggulan</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Skema Harga</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Docs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dukungan</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#faq" className="hover:text-white transition-colors">Pertanyaan Umum (FAQ)</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Early Access</a></li>
              <li>
                <a href="/Project_Context.md" target="_blank" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>Konteks Proyek</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Kontak Kami</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-light" />
                <span>halo@banggaumkm.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-light" />
                <span>+62 821-2345-6789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand-light" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="mx-auto max-w-7xl px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row sm:justify-between sm:text-left gap-4">
          <p>© 2026 Bangga UMKM. Hak cipta dilindungi undang-undang.</p>
          <div className="flex justify-center sm:justify-end gap-6">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat Ketentuan</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL DIALOG FOR EARLY ACCESS / SIMULATED CTA --- */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 animate-fade-in-up">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-medium" />
                <span>Pendaftaran Berhasil!</span>
              </h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {modalMessage}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDemoModal(false)}
                className="rounded-full bg-brand-medium px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark active:scale-95"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
