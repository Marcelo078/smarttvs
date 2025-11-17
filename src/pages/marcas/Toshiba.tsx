import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Toshiba = () => {
  const models = [
    {
      name: "TV Toshiba TB029M 50\"",
      slug: "tv-toshiba-tb029m-50-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "4K de entrada com Google TV",
      rating: 4.3
    },
    {
      name: "TV Toshiba TB059E 50\"",
      slug: "tv-toshiba-tb059e-50-e-boa",
      size: "50\"",
      resolution: "QLED 4K",
      description: "QLED com Google TV Premium",
      rating: 4.6
    },
    {
      name: "TV Toshiba 55C350NS",
      slug: "tv-toshiba-55c350ns-e-boa",
      size: "55\"",
      resolution: "4K",
      description: "4K com Vidaa OS",
      rating: 4.2
    },
    {
      name: "TV Toshiba 43C350",
      slug: "tv-toshiba-43c350-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Ideal para TV aberta e streaming",
      rating: 4.4
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Toshiba é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV Toshiba é boa! Análise dos modelos QLED, 4K e Google TV. Comparativo com TCL e Samsung. Melhor custo-benefício 2025." />
        <meta name="keywords" content="tv toshiba é boa, toshiba qled, toshiba google tv, tv toshiba 50, toshiba 4k" />
        <meta property="og:title" content="TV Toshiba é boa? Guia Completo QLED e Google TV 2025" />
        <meta property="og:description" content="Análise completa das TVs Toshiba: QLED, Google TV e mais!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/toshiba" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Marca Premium Japonesa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV Toshiba é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca japonesa com tecnologia QLED e Google TV. 
              Descubra se vale a pena investir em Toshiba em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Toshiba?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Marca Premium</h3>
                  <p className="text-sm text-muted-foreground">Tradição japonesa em eletrônicos</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Tecnologia QLED</h3>
                  <p className="text-sm text-muted-foreground">Cores vibrantes e contraste superior</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Google TV</h3>
                  <p className="text-sm text-muted-foreground">Interface inteligente e completa</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Durabilidade</h3>
                  <p className="text-sm text-muted-foreground">Qualidade superior de construção</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos Toshiba Analisados</h2>
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
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial Toshiba</h2>
                <p className="text-xl mb-6">Smart TV QLED 65" 4K Toshiba com Google TV</p>
                <a 
                  href="https://mercadolivre.com/sec/13uFNuV"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  ⚡ QLED Premium | 🎮 Ideal para Gamers
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre Toshiba</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Toshiba é boa?</h3>
                  <p className="text-muted-foreground">Sim! Toshiba oferece excelente qualidade com tradição japonesa. Os modelos QLED competem com Samsung e LG a preços mais acessíveis.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Toshiba QLED vale a pena?</h3>
                  <p className="text-muted-foreground">Muito! A tecnologia QLED oferece cores mais vivas e brilho superior, ideal para ambientes claros e conteúdo HDR.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Google TV é melhor que Vidaa?</h3>
                  <p className="text-muted-foreground">Sim! Google TV oferece mais apps, melhor integração com Android e recomendações personalizadas. É o sistema mais completo.</p>
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

export default Toshiba;