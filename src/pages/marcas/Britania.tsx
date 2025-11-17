import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Britania = () => {
  const models = [
    {
      name: "TV Britânia BTV50G7PR2CSBL",
      slug: "tv-britania-btv50g7pr2csbl-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "4K barata com bom custo-benefício",
      rating: 4.0
    },
    {
      name: "TV Britânia 32 BTV32G7PR2CSGBLH",
      slug: "tv-britania-32-btv32g7pr2csgblh-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Roku TV compacta e acessível",
      rating: 4.2
    },
    {
      name: "TV Britânia BTV32D10N5SKH",
      slug: "tv-britania-btv32d10n5skh-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Ideal para quarto pequeno",
      rating: 3.9
    },
    {
      name: "TV Britânia BTV43G7PR2CSBLF",
      slug: "tv-britania-btv43g7pr2csblf-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Full HD intermediária",
      rating: 4.1
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Britânia é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV Britânia é boa! Análise dos modelos 32, 43 e 50 polegadas com Roku. Avaliações reais e melhor custo-benefício 2025." />
        <meta name="keywords" content="tv britania é boa, britania roku, tv britania 32, tv britania 50, smart tv britania" />
        <meta property="og:title" content="TV Britânia é boa? Guia Completo com Todos os Modelos 2025" />
        <meta property="og:description" content="Análise completa das TVs Britânia com Roku. Descubra os melhores modelos e preços!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/britania" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Marca Nacional Popular</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV Britânia é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca brasileira com foco em preço acessível. 
              Descubra se as TVs Britânia com Roku valem a pena em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Britânia?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Preços Baixos</h3>
                  <p className="text-sm text-muted-foreground">Uma das marcas mais acessíveis do mercado</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Roku TV</h3>
                  <p className="text-sm text-muted-foreground">Sistema rápido e estável</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Marca Brasileira</h3>
                  <p className="text-sm text-muted-foreground">Tradição em eletrônicos nacionais</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Ótimo Básico</h3>
                  <p className="text-sm text-muted-foreground">Ideal para primeira TV ou segundo ambiente</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos Britânia Analisados</h2>
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
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial Britânia</h2>
                <p className="text-xl mb-6">Smart TV Britânia 32 Polegadas HD LED com Roku TV</p>
                <a 
                  href="https://mercadolivre.com/sec/2dn5C1e"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  ⚡ Melhor preço do Brasil | 🚚 Frete grátis
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre Britânia</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Britânia é boa?</h3>
                  <p className="text-muted-foreground">Para o preço, sim! É uma excelente opção para quem busca economia sem abrir mão de Smart TV. Os modelos com Roku são especialmente recomendados.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Britânia dura quanto tempo?</h3>
                  <p className="text-muted-foreground">Com uso adequado, dura de 5 a 7 anos. Não espere a mesma durabilidade de marcas premium, mas para o preço oferece bom retorno.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Britânia Roku é melhor que Android?</h3>
                  <p className="text-muted-foreground">Sim! O Roku é mais leve, rápido e estável que Android em TVs de entrada. Sistema ideal para hardware básico.</p>
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

export default Britania;