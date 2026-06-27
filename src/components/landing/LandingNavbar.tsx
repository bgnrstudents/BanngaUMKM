"use client";

import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  activeSection: string;
  onNavClick?: () => void;
  onRegisterClick: () => void;
};

export default function LandingNavbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  onNavClick,
  onRegisterClick,
}: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          onClick={onNavClick}
        >
          <Image
            src="/logo.svg"
            alt="Bangga UMKM Logo"
            width={160}
            height={45}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { id: "home", label: "Beranda" },
            { id: "features", label: "Fitur" },
            { id: "pricing", label: "Harga" },
            { id: "about", label: "Tentang Kami" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-brand-medium ${
                activeSection === item.id
                  ? "text-brand-medium font-semibold"
                  : "text-slate-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center justify-center rounded-full bg-brand-medium px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-medium/10 transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-medium/20 active:scale-95"
          >
            Daftar Gratis
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white p-4 shadow-xl md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4">
            {[
              { id: "home", label: "Beranda" },
              { id: "features", label: "Fitur" },
              { id: "pricing", label: "Harga" },
              { id: "about", label: "Tentang Kami" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-brand-medium font-semibold"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="mt-2 w-full rounded-full bg-brand-medium py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-brand-dark"
            >
              Daftar Gratis
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

