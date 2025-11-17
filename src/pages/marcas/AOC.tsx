import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AOC = () => {
  const models = [
    {
      name: "TV AOC Roku 43S5045",
      slug: "tv-aoc-roku-43s5045-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Roku TV rápida e estável",
      rating: 4.4
    },
    {
      name: "TV AOC 32S5135",
      slug: "tv-aoc-32s5135-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Compacta para ambientes pequenos",
      rating: 4.1
    },
    {
      name: "TV AOC 50S5195",
      slug: "tv-aoc-50s5195-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "4K com ótimo preço",
      rating: 4.3
    },
    {
      name: "TV AOC LED 32\"",
      slug: "tv-aoc-led-32-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Melhor durabilidade da categoria",
      rating: 4.5
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV AOC é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV AOC é boa! Análise completa dos modelos Roku, 4K e HD. Comparativo com TCL. Durabilidade e custo-benefício 2025." />
        <meta name="keywords" content="tv aoc é boa, aoc roku, tv aoc 32, tv aoc 50, aoc 4k, durabilidade aoc" />
        <meta property="og:title" content="TV AOC é boa? Guia Completo Roku TV 2025" />
        <meta property="og:description" content="Análise detalhada das TVs AOC com Roku. Descubra qual modelo tem melhor durabilidade!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/aoc" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Líder em Monitores e TVs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV AOC é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca referência em monitores, agora dominando o mercado de TVs. 
              Descubra se AOC Roku vale a pena em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que AOC?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Durabilidade</h3>
                  <p className="text-sm text-muted-foreground">Painéis de alta qualidade comprovada</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Roku TV</h3>
                  <p className="text-sm text-muted-foreground">Sistema mais rápido do mercado</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Custo-Benefício</h3>
                  <p className="text-sm text-muted-foreground">Qualidade premium a preço justo</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Expertise em Displays</h3>
                  <p className="text-sm text-muted-foreground">40+ anos em tecnologia de telas</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos AOC Analisados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {models.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all border-2 hover:border-primary/50">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                        <div className="flex gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                            {model.size}
                          </span>
                          <span className="px-3 py-1 bg-accent/10 rounded-full text-sm font-semibold text-accent">
                            {model.resolution}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{model.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <Link 
                      to={`/artigos/${model.slug}`}
                      className="inline-block w-full text-center py-2 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Ver Análise Completa
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <Card className="border-4 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-8 text-center">
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial AOC</h2>
                <p className="text-xl mb-6">Smart TV 32" AOC Roku TV com WiFi e HDMI</p>
                <a 
                  href="https://mercadolivre.com/sec/1pmMsWG"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  ⚡ Roku TV ultrarrápido | 🛡️ Durabilidade garantida
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre AOC</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV AOC é boa?</h3>
                  <p className="text-muted-foreground">Excelente! AOC tem tradição em displays de qualidade. As TVs combinam painéis duráveis com o sistema Roku, oferecendo ótimo custo-benefício.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">AOC Roku é melhor que TCL?</h3>
                  <p className="text-muted-foreground">Ambas são excelentes! AOC tem painéis mais duráveis, enquanto TCL oferece mais recursos premium. Para uso básico, AOC é melhor escolha.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Quanto tempo dura uma TV AOC?</h3>
                  <p className="text-muted-foreground">De 7 a 10 anos com uso adequado. AOC usa painéis de alta qualidade com boa durabilidade comprovada em monitores.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AOC;