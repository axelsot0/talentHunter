"use client";

import { useRef, useState, useCallback } from "react";
import { Job } from "@/types/job";
import { JobCard } from "./job-card";

interface JobCarouselProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}

export function JobCarousel({ jobs, onSelectJob }: JobCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 400);
  };

  return (
    <div className="relative group">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-card-hover flex items-center justify-center hover:bg-white transition-all duration-200 cursor-pointer"
          aria-label="Anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-teal">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-card-hover flex items-center justify-center hover:bg-white transition-all duration-200 cursor-pointer"
          aria-label="Siguiente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-teal">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Cards */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} onClick={() => onSelectJob(job)} />
        ))}
      </div>
    </div>
  );
}
