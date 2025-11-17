import { Link } from "react-router-dom";
import { Menu, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const brands = [
  { name: "Hisense", path: "/marca/hisense" },
  { name: "Britânia", path: "/marca/britania" },
  { name: "Toshiba", path: "/marca/toshiba" },
  { name: "HQT", path: "/marca/hqt" },
  { name: "AOC", path: "/marca/aoc" },
  { name: "Aiwa", path: "/marca/aiwa" },
  { name: "Multilaser", path: "/marca/multilaser" },
  { name: "Philco", path: "/marca/philco" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Star className="h-6 w-6 text-accent fill-accent" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Melhores Reviews
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors">
                Marcas
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  {brands.map((brand) => (
                    <Link
                      key={brand.path}
                      to={brand.path}
                      className="block px-3 py-2 text-sm rounded hover:bg-muted transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </Link>
            <Button size="sm" className="bg-gradient-accent">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Início
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Marcas</p>
                  {brands.map((brand) => (
                    <Link
                      key={brand.path}
                      to={brand.path}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
                <Link to="/sobre" className="text-lg font-medium hover:text-primary transition-colors">
                  Sobre
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
