import { BrandName } from "@/components/ui/brand-name";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-teal-dark text-text-inverse">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <BrandName size="sm" className="!text-white [&>span]:!text-white [&>span:last-child]:!text-coral-light" />
            <p className="text-sm text-white/70 leading-relaxed">
              Conectamos el mejor talento con las mejores oportunidades en República Dominicana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#vacantes" className="hover:text-white transition-colors">Vacantes</a></li>
              <li><span className="cursor-default">Empresas (Próximamente)</span></li>
              <li><span className="cursor-default">Precios (Próximamente)</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@talento360.do</li>
              <li>+1 (809) 555-0360</li>
              <li>Santo Domingo, R.D.</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                <span
                  key={social}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  title={social}
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} TALENTO 360. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">
            Hecho con dedicación en República Dominicana
          </p>
        </div>
      </Container>
    </footer>
  );
}
