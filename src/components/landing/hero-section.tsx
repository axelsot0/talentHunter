import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
              Potencializa tu{" "}
              <span className="text-coral">perfil profesional</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              <strong className="text-teal">TALENTO 360</strong> nace para proveer
              asesorías enfocadas en potencializar el perfil profesional de una manera
              correcta, clara y enfocada, utilizando las estrategias del área de
              Recursos Humanos.
            </p>
            <p className="text-base text-text-muted leading-relaxed max-w-lg">
              Desarrollamos un vínculo con tus competencias, capacidades y aptitudes
              para que sigas escalando en diferentes posiciones profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#vacantes">
                <Button variant="primary" size="lg">
                  Ver Vacantes
                </Button>
              </a>
              <a href="#sobre-nosotros">
                <Button variant="outline" size="lg">
                  Conoce Más
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract gradient circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-light/30 to-teal/20 blur-3xl" />
              <div className="absolute top-1/4 left-1/4 w-2/3 h-2/3 rounded-full bg-gradient-to-tr from-coral/20 to-coral-light/10 blur-2xl" />

              {/* Floating stat cards */}
              <div className="absolute top-8 right-0 bg-white shadow-card rounded-card px-4 py-3 animate-slide-up">
                <p className="text-2xl font-bold text-teal">500+</p>
                <p className="text-xs text-text-muted">Empresas Activas</p>
              </div>
              <div className="absolute bottom-16 left-0 bg-white shadow-card rounded-card px-4 py-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-2xl font-bold text-coral">10,000+</p>
                <p className="text-xs text-text-muted">Candidatos</p>
              </div>
              <div className="absolute top-1/2 right-8 bg-white shadow-card rounded-card px-4 py-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-2xl font-bold text-teal-light">2,500+</p>
                <p className="text-xs text-text-muted">Vacantes</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
