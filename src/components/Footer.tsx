import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Reviews Smart TVs
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Análises honestas e completas de Smart TVs vendidas no Brasil. Reviews detalhados com especificações técnicas e comparativos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Marcas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marca/hisense" className="text-muted-foreground hover:text-primary transition-colors">Hisense</Link></li>
              <li><Link to="/marca/britania" className="text-muted-foreground hover:text-primary transition-colors">Britânia</Link></li>
              <li><Link to="/marca/toshiba" className="text-muted-foreground hover:text-primary transition-colors">Toshiba</Link></li>
              <li><Link to="/marca/philco" className="text-muted-foreground hover:text-primary transition-colors">Philco</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors">Transparência</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Isenção de Responsabilidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Reviews Smart TVs. Todos os direitos reservados.</p>
          <p className="mt-2">
            Site participante do Programa de Afiliados do Mercado Livre. 
            Recebemos comissões por compras qualificadas através de nossos links.
          </p>
        </div>
      </div>
    </footer>
  );
};
