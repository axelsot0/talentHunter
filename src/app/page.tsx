import { SplashBanner } from "@/components/splash/splash-banner";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { JobsSection } from "@/components/jobs/jobs-section";

export default function Home() {
  return (
    <>
      <SplashBanner />
      <HeroSection />
      <AboutSection />
      <JobsSection />
    </>
  );
}
