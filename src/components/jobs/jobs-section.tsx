"use client";

import { useState, useMemo } from "react";
import { jobs } from "@/data/jobs";
import { Job } from "@/types/job";
import { Container } from "@/components/ui/container";
import { JobCarousel } from "./job-carousel";
import { JobModal } from "./job-modal";
import { JobSearchBar } from "./job-search-bar";

export function JobsSection() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === null || job.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="vacantes" className="py-16 pb-32 bg-surface-muted">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Vacantes <span className="text-coral">Disponibles</span>
          </h2>
          <p className="text-text-muted">
            {filteredJobs.length} oportunidades esperando por ti
          </p>
        </div>

        {filteredJobs.length > 0 ? (
          <JobCarousel jobs={filteredJobs} onSelectJob={setSelectedJob} />
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-text-muted">No se encontraron vacantes con estos filtros</p>
          </div>
        )}
      </Container>

      <JobSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <JobModal
        job={selectedJob}
        open={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
      />
    </section>
  );
}
