"use client";

import { Job } from "@/types/job";
import { Badge } from "@/components/ui/badge";
import { formatSalary } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div
      className="flip-card w-72 h-80 flex-shrink-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div
          className={`flip-card-front absolute inset-0 bg-surface rounded-card shadow-card p-6 flex flex-col justify-between ${
            job.featured ? "border-l-4 border-coral" : ""
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-lg">
                {job.categoryIcon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-muted truncate">{job.company.name}</p>
              </div>
              {job.featured && (
                <Badge variant="default" className="text-[10px]">Destacada</Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2 leading-snug line-clamp-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <Badge variant="muted">{job.location}</Badge>
              <Badge variant="teal">{job.locationType}</Badge>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-teal">
              {formatSalary(job.salaryMin, job.currency)} - {formatSalary(job.salaryMax, job.currency)}
            </p>
            <p className="text-xs text-text-muted mt-1">{job.type}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 bg-teal rounded-card shadow-card p-6 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-lg font-semibold mb-3 leading-snug">{job.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-6">
              {job.description}
            </p>
          </div>
          <div className="text-center pt-3">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-button text-sm font-medium hover:bg-white/30 transition-colors">
              Ver Detalle →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
