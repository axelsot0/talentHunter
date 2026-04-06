"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandName } from "@/components/ui/brand-name";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <BrandName size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium text-text-secondary hover:text-teal transition-colors">
              Inicio
            </a>
            <a href="#vacantes" className="text-sm font-medium text-text-secondary hover:text-teal transition-colors">
              Vacantes
            </a>
            <span className="text-sm font-medium text-text-muted cursor-default" title="Próximamente">
              Empresas
            </span>
            <div className="w-px h-6 bg-border" />
            <Button variant="ghost" size="sm">
              Iniciar Sesión
            </Button>
            <Button variant="primary" size="sm">
              Publicar Vacante
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-button hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label="Menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-border-light pt-4 flex flex-col gap-3 animate-fade-in">
            <a
              href="#inicio"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-teal transition-colors py-2"
            >
              Inicio
            </a>
            <a
              href="#vacantes"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-teal transition-colors py-2"
            >
              Vacantes
            </a>
            <span className="text-sm font-medium text-text-muted py-2">
              Empresas (Próximamente)
            </span>
            <hr className="border-border-light" />
            <Button variant="ghost" size="sm" className="w-full">
              Iniciar Sesión
            </Button>
            <Button variant="primary" size="sm" className="w-full">
              Publicar Vacante
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
