export interface Job {
  slug: string;
  title: string;
  company: {
    name: string;
    logo: string;
    description: string;
  };
  location: string;
  locationType: "presencial" | "remoto" | "híbrido";
  category: string;
  categoryIcon: string;
  type: "tiempo-completo" | "medio-tiempo" | "contrato" | "freelance";
  salaryMin: number;
  salaryMax: number;
  currency: "DOP" | "USD";
  description: string;
  requirements: string[];
  benefits: string[];
  publishedAt: string;
  featured: boolean;
}
