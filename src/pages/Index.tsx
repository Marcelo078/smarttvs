import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandCard } from "@/components/BrandCard";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, Search } from "lucide-react";

const brands = [
  {
    name: "Hisense",
    description: "Qualidade internacional com preços competitivos. Análises detalhadas de todos os modelos disponíveis no Brasil.",
    path: "/marca/hisense",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 8
  },
  {
    name: "Britânia",
    description: "Marca brasileira com ótimo custo-benefício. Descubra se vale a pena investir nesta opção nacional.",
    path: "/marca/britania",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 7
  },
  {
    name: "Toshiba",
    description: "Tradição japonesa em tecnologia. Veja nossas análises dos modelos QLED e LED mais populares.",
    path: "/marca/toshiba",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 6
  },
  {
    name: "Philco",
    description: "Uma das marcas mais vendidas do Brasil. Será que os modelos Roku TV fazem jus à fama?",
    path: "/marca/philco",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 5
  },
  {
    name: "AOC",
    description: "Destaque em monitores e TVs. Análises completas dos modelos com sistema Roku integrado.",
    path: "/marca/aoc",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 5
  },
  {
    name: "Multilaser",
    description: "Opção econômica para quem busca o básico. Veja se realmente vale a pena economizar.",
    path: "/marca/multilaser",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 4
  },
  {
    name: "HQT",
    description: "Marca em ascensão no mercado brasileiro. Análises honestas sobre durabilidade e qualidade.",
    path: "/marca/hqt",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 6
  },
  {
    name: "Aiwa",
    description: "Tecnologia Android TV com preços atrativos. Descubra se a qualidade acompanha o valor.",
    path: "/marca/aiwa",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    models: 4
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              Mais de 50 modelos analisados
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              As <span className="bg-gradient-primary bg-clip-text text-transparent">Melhores Reviews</span> de TVs do Brasil
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Análises detalhadas, honestas e completas das principais marcas de TVs vendidas no Mercado Livre. 
              Compare preços, qualidade e avaliações reais antes de comprar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-accent text-lg">
                <Search className="mr-2 h-5 w-5" />
                Encontrar minha TV ideal
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver todas as marcas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Reviews Imparciais</h3>
            <p className="text-muted-foreground">
              Análises honestas baseadas em especificações técnicas e avaliações reais de usuários
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sempre Atualizados</h3>
            <p className="text-muted-foreground">
              Conteúdo constantemente atualizado com os lançamentos e promoções mais recentes
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Melhores Preços</h3>
            <p className="text-muted-foreground">
              Links diretos para as melhores ofertas do Mercado Livre com cashback disponível
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore por Marca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha uma marca e descubra análises detalhadas de cada modelo, 
            com prós, contras e veredito final de nossa equipe especializada
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.path} {...brand} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Use nossa busca avançada para encontrar exatamente o modelo que você precisa
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Buscar modelos específicos
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
