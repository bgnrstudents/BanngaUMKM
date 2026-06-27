"use client";

import React from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  onRegisterClick: () => void;
  onSeeFeaturesClick?: () => void;
  RightSlot?: ReactNode;
};

export default function HeroSection({
  onRegisterClick,
}: Props) {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-sky-50/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6 lg:pr-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-brand-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Rencana Bisnis IBAC 2026 - Tahap MVP</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Kelola Usaha Lebih Cerdas Bersama{" "}
              <span className="bg-gradient-to-r from-brand-medium to-brand-light bg-clip-text text-transparent">
                Bangga UMKM
              </span>
            </h1>

            <p className="text-base text-slate-600 sm:text-lg leading-relaxed max-w-lg">
              Catat transaksi, pantau kondisi usaha, dan dapatkan insight bisnis berbasis AI dalam satu platform yang super sederhana untuk siapa saja.
            </p>

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
                onClick={onRegisterClick}
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

          <div className="relative lg:col-span-6 animate-fade-in">
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02] animate-float">
                <div className="mb-2 flex items-center gap-1.5 px-2.5 pt-1">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-[10px] font-medium text-slate-400">
                    app.banggaumkm.id/dashboard
                  </span>
                </div>

                <Image
                  src="/dashboard-mockup.svg"
                  alt="Mockup Dashboard Bangga UMKM"
                  width={800}
                  height={550}
                  priority
                  className="h-auto w-full rounded-lg"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-blue-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:flex items-center gap-3 max-w-xs animate-float [animation-delay:2s]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  {/* icon will be replaced in next step with premium mapping */}
                  <ArrowRight className="h-5 w-5 rotate-0" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Kenaikan Laba</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Laba bersih usaha meningkat +12.4% di bulan ini!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

