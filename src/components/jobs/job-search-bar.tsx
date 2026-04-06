"use client";

import { useState } from "react";
import { getCategoryIcons } from "@/data/jobs";

interface JobSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function JobSearchBar({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: JobSearchBarProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const categoryIcons = getCategoryIcons();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-lg px-4">
      {/* Filter panel */}
      {filtersOpen && (
        <div className="bg-surface rounded-card shadow-modal p-4 mb-3 animate-slide-up">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
            Filtrar por categoría
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                onCategoryChange(null);
                setFiltersOpen(false);
              }}
              className={`px-3 py-2 rounded-button text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === null
                  ? "bg-teal text-white"
                  : "bg-surface-muted text-text-secondary hover:bg-teal/10"
              }`}
            >
              Todas
            </button>
            {categoryIcons.map(({ category, icon }) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(activeCategory === category ? null : category);
                  setFiltersOpen(false);
                }}
                className={`px-3 py-2 rounded-button text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === category
                    ? "bg-teal text-white"
                    : "bg-surface-muted text-text-secondary hover:bg-teal/10"
                }`}
              >
                <span>{icon}</span>
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-surface/95 backdrop-blur-md rounded-full shadow-modal px-4 py-3 border border-border-light">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-muted flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por título, empresa..."
          className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
        />
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
            filtersOpen || activeCategory
              ? "bg-teal text-white"
              : "bg-surface-muted text-text-secondary hover:bg-teal/10"
          }`}
          aria-label="Filtros"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
