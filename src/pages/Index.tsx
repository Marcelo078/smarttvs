import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandCard } from "@/components/BrandCard";
import { KeywordCard } from "@/components/KeywordCard";
import { BrandIndex } from "@/components/BrandIndex";
import { TrustBadges } from "@/components/TrustBadges";
import { SearchQuiz } from "@/components/SearchQuiz";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, Search, CheckCircle2, Wrench, Scale } from "lucide-react";
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
  generateBrandListStructuredData,
  generateFAQStructuredData,
} from "@/lib/structuredData";

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
    name: "HQ",
    description: "Marca em ascensão no mercado brasileiro. Análises honestas sobre durabilidade e qualidade.",
    path: "/marca/hq",
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

const keywordQuestions = [
  {
    category: "transactional",
    icon: CheckCircle2,
    questions: [
      { text: "TV Hisense 40 polegadas é boa?", path: "/artigos/tv-hisense-40a4n-e-boa" },
      { text: "TV Philco Roku vale a pena comprar?", path: "/marca/philco" },
      { text: "Qual a melhor TV 4K barata 2025?", path: "/marca/hisense" },
      { text: "TV Britânia 50 polegadas é confiável?", path: "/marca/britania" },
      { text: "AOC Roku TV tem boa qualidade?", path: "/marca/aoc" },
    ]
  },
  {
    category: "comparison",
    icon: Scale,
    questions: [
      { text: "Hisense vs Samsung: qual comprar?", path: "/marca/hisense" },
      { text: "Philco ou Britânia: qual é melhor?", path: "/marca/philco" },
      { text: "TV LED ou QLED: entenda a diferença", path: "/marca/toshiba" },
      { text: "Smart TV barata: top 5 marcas", path: "/" },
      { text: "Roku TV vs Android TV: comparativo", path: "/marca/aoc" },
    ]
  },
  {
    category: "problem",
    icon: Wrench,
    questions: [
      { text: "TV Hisense tem defeito? Veja a verdade", path: "/marca/hisense" },
      { text: "Quanto tempo dura uma TV Philco?", path: "/marca/philco" },
      { text: "Vale a pena comprar TV chinesa?", path: "/marca/hisense" },
      { text: "TV 32 polegadas para quarto: qual escolher?", path: "/" },
      { text: "Melhor TV para assistir Netflix e Prime", path: "/marca/philco" },
    ]
  }
];

const brandIndexData = [
  {
    name: "Hisense",
    models: [
      { name: "TV Hisense 40A4N é boa?", path: "/artigos/tv-hisense-40a4n-e-boa", badge: "REVIEW COMPLETO" },
      { name: "TV Hisense A6H vale a pena?", path: "/artigos/tv-hisense-a6h-e-boa", badge: "REVIEW COMPLETO" },
      { name: "TV Hisense QLED 55Q6N - Análise 2025", path: "/marca/hisense" },
      { name: "TV Hisense 50 polegadas 4K - Top 3", path: "/marca/hisense" },
      { name: "TV Hisense U6H ULED: compensa o preço?", path: "/marca/hisense" },
    ],
    questions: [
      { question: "Hisense é marca boa?" },
      { question: "Hisense dá problema?" },
      { question: "Hisense vs TCL: qual melhor?" },
    ],
    path: "/marca/hisense",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
  },
  {
    name: "Philco",
    models: [
      { name: "Philco Roku TV 43 polegadas vale a pena?", path: "/artigos/tv-philco-roku-43-e-boa", badge: "REVIEW COMPLETO" },
      { name: "Philco Roku TV 32 polegadas", path: "/marca/philco", badge: "MAIS VENDIDA" },
      { name: "Philco 50 polegadas 4K análise completa", path: "/marca/philco" },
      { name: "Philco vs TCL: qual é melhor?", path: "/marca/philco" },
    ],
    questions: [
      { question: "Philco é boa marca?" },
      { question: "Roku TV funciona bem?" },
      { question: "Philco tem assistência técnica?" },
    ],
    path: "/marca/philco",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
  },
  {
    name: "Britânia",
    models: [
      { name: "Britânia 50 polegadas vale a pena?", path: "/artigos/tv-britania-50-e-boa", badge: "REVIEW COMPLETO" },
      { name: "Britânia 40 polegadas é boa?", path: "/marca/britania" },
      { name: "Britânia Smart TV funciona bem?", path: "/marca/britania" },
    ],
    questions: [
      { question: "Britânia é marca confiável?" },
      { question: "Britânia dura quanto tempo?" },
      { question: "Vale a pena comprar Britânia?" },
    ],
    path: "/marca/britania",
    rating: 3,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
  },
  {
    name: "Toshiba",
    models: [
      { name: "Toshiba QLED é boa?", path: "/artigos/tv-toshiba-qled-e-boa", badge: "REVIEW COMPLETO" },
      { name: "Toshiba Fire TV 50 polegadas", path: "/marca/toshiba" },
      { name: "Toshiba C350 QLED análise completa", path: "/marca/toshiba" },
    ],
    questions: [
      { question: "Toshiba é marca confiável?" },
      { question: "QLED vale a pena?" },
      { question: "Toshiba tem Fire TV?" },
    ],
    path: "/marca/toshiba",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
  },
  {
    name: "AOC",
    models: [
      { name: "AOC Roku 32 polegadas é boa?", path: "/artigos/tv-aoc-roku-32-e-boa", badge: "REVIEW COMPLETO" },
      { name: "AOC Roku TV 43 polegadas", path: "/marca/aoc" },
      { name: "AOC 50 polegadas 4K análise", path: "/marca/aoc" },
    ],
    questions: [
      { question: "AOC é boa marca?" },
      { question: "AOC Roku funciona bem?" },
      { question: "Vale a pena comprar AOC?" },
    ],
    path: "/marca/aoc",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
  },
];

const faqData = [
  { 
    question: "TV Hisense 40 polegadas é boa?", 
    answer: "Sim, a TV Hisense 40A4N oferece excelente custo-benefício com resolução Full HD, sistema operacional VIDAA e boa qualidade de imagem para o preço." 
  },
  { 
    question: "Philco Roku vale a pena comprar?", 
    answer: "As TVs Philco com Roku TV são uma ótima escolha para quem busca um sistema operacional fluido e intuitivo, com acesso fácil aos principais apps de streaming." 
  },
  { 
    question: "Qual a melhor TV 4K barata 2025?", 
    answer: "Entre as opções mais acessíveis com 4K, destacam-se a Hisense A6H, Philco Roku TV 43 polegadas e Britânia BTV50G70N5CF, todas com bom equilíbrio entre preço e qualidade." 
  },
];

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebsiteStructuredData(),
      generateOrganizationStructuredData(),
      generateBrandListStructuredData(brands),
      generateFAQStructuredData(faqData),
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      
      {/* Hero Section Premium */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Badge de credibilidade */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              +50.000 leitores mensais • Atualizado 2025
            </div>

            {/* Título H1 SEO-otimizado */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Reviews Smart TVs 2025
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-foreground/90 font-semibold">
                Análises Completas e Honestas
              </span>
            </h1>

            {/* Subtítulo com keywords semânticas */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Descubra qual TV comprar com nossas <strong>análises detalhadas</strong> de Hisense, Philco, Britânia, Toshiba e mais. 
              <br className="hidden md:block" />
              Compare <strong>especificações técnicas</strong>, <strong>preços</strong> e <strong>avaliações reais</strong> de usuários.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-white text-lg px-8 py-6 h-auto hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => setQuizOpen(true)}
              >
                <Search className="mr-2 h-5 w-5" />
                Encontrar Minha TV Ideal
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto border-2 hover:bg-card"
              >
                Ver Ranking Completo 2025
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Perguntas Mais Buscadas (Long-tail Keywords) */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Mais Buscadas sobre Smart TVs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas com nossas análises detalhadas e comparativos honestos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {keywordQuestions.map((category) => (
            <div key={category.category} className="space-y-4">
              {category.questions.map((q) => (
                <KeywordCard
                  key={q.text}
                  icon={category.icon}
                  question={q.text}
                  path={q.path}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Seção: Índice de Marcas Expansível */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore por Marca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clique para ver modelos analisados, principais dúvidas e reviews completos
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {brandIndexData.map((brand) => (
            <BrandIndex key={brand.name} {...brand} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Reviews Imparciais</h3>
            <p className="text-muted-foreground">
              Análises honestas baseadas em especificações técnicas e avaliações reais de usuários
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sempre Atualizados</h3>
            <p className="text-muted-foreground">
              Conteúdo constantemente atualizado com os lançamentos e promoções mais recentes
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
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

      {/* Brands Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todas as Marcas Analisadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja nossa coleção completa de reviews organizados por marca
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
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&q=80')] opacity-10 bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Use nossa busca avançada para encontrar exatamente o modelo que você precisa
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-xl"
              onClick={() => setQuizOpen(true)}
            >
              <Search className="mr-2 h-5 w-5" />
              Buscar modelos específicos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <SearchQuiz open={quizOpen} onOpenChange={setQuizOpen} />
    </div>
  );
};

export default Index;
