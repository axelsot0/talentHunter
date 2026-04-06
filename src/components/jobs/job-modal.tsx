"use client";

import { Job } from "@/types/job";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatSalary, timeAgo } from "@/lib/utils";

interface JobModalProps {
  job: Job | null;
  open: boolean;
  onClose: () => void;
}

export function JobModal({ job, open, onClose }: JobModalProps) {
  if (!job) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-card bg-teal/10 flex items-center justify-center text-2xl flex-shrink-0">
            {job.categoryIcon}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-text-primary leading-snug">
              {job.title}
            </h2>
            <p className="text-sm text-text-secondary mt-1">{job.company.name}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="muted">{job.location}</Badge>
              <Badge variant="teal">{job.locationType}</Badge>
              <Badge variant="outline">{job.type}</Badge>
              <Badge variant="muted">{job.category}</Badge>
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="bg-teal/5 rounded-card p-4 mb-6">
          <p className="text-sm text-text-muted mb-1">Rango Salarial</p>
          <p className="text-xl font-bold text-teal">
            {formatSalary(job.salaryMin, job.currency)} - {formatSalary(job.salaryMax, job.currency)}
            <span className="text-sm font-normal text-text-muted"> / mes</span>
          </p>
          <p className="text-xs text-text-muted mt-1">Publicado {timeAgo(job.publishedAt)}</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
            Descripción del Puesto
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
            Requisitos
          </h3>
          <ul className="space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
            Beneficios
          </h3>
          <ul className="space-y-2">
            {job.benefits.map((ben, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <svg className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {ben}
              </li>
            ))}
          </ul>
        </div>

        {/* About Company */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
            Sobre la Empresa
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">{job.company.description}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="lg" className="flex-1" disabled>
            Aplicar Ahora (Próximamente)
          </Button>
          <Button variant="outline" size="lg" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
