import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-16 bg-surface-muted">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Sobre <span className="text-teal">TALENTO</span>{" "}
            <span className="text-coral">360</span>
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              <strong className="text-teal">TALENTO 360</strong> es un proyecto
              iniciado por la <strong>Psicóloga Laura Medina Olivares</strong>, con
              más de 3 años en el área de Recursos Humanos en diferentes sectores.
            </p>
            <p>
              Buscamos orientar de manera correcta a las personas interesadas en
              continuar mejorando su perfil profesional, conectándolas con las mejores
              oportunidades laborales del mercado dominicano.
            </p>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {[
              {
                icon: "🎯",
                title: "Asesoría Enfocada",
                desc: "Orientación personalizada para potenciar tu perfil",
              },
              {
                icon: "📈",
                title: "Crecimiento Profesional",
                desc: "Estrategias para escalar en tu carrera",
              },
              {
                icon: "🤝",
                title: "Conexión con Empresas",
                desc: "Acceso a las mejores vacantes del mercado",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-card shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
