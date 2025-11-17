import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Multilaser = () => {
  const models = [
    {
      name: "TV Multilaser TL032",
      slug: "tv-multilaser-tl032-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "HD para ambientes pequenos",
      rating: 3.8
    },
    {
      name: "TV Multilaser 40\"",
      slug: "tv-multilaser-40-e-boa",
      size: "40\"",
      resolution: "Full HD",
      description: "Orçamento baixo com qualidade",
      rating: 3.9
    },
    {
      name: "Smart TV Multilaser 50\"",
      slug: "smart-tv-multilaser-50-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "4K Roku TV com bom preço",
      rating: 4.0
    },
    {
      name: "TV Multilaser Android",
      slug: "tv-multilaser-android-e-boa",
      size: "Vários",
      resolution: "HD/FHD",
      description: "Sistema Android funcional",
      rating: 3.7
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Multilaser é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV Multilaser é boa! Análise dos modelos Roku e Android. Comparativo com Britânia. Melhor TV barata 2025." />
        <meta name="keywords" content="tv multilaser é boa, multilaser roku, tv multilaser 50, multilaser android, tv barata" />
        <meta property="og:title" content="TV Multilaser é boa? Guia Completo 2025" />
        <meta property="og:description" content="Análise completa das TVs Multilaser mais baratas do mercado!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/multilaser" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Marca Nacional Acessível</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV Multilaser é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca brasileira com preços super acessíveis. 
              Descubra se Multilaser vale a pena para quem tem orçamento limitado em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Multilaser?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Preços Imbatíveis</h3>
                  <p className="text-sm text-muted-foreground">A mais barata do mercado brasileiro</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Marca Nacional</h3>
                  <p className="text-sm text-muted-foreground">Assistência em todo Brasil</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Opções Roku</h3>
                  <p className="text-sm text-muted-foreground">Modelos com sistema rápido</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Primeira TV Ideal</h3>
                  <p className="text-sm text-muted-foreground">Perfeito para começar</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos Multilaser Analisados</h2>
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
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial Multilaser</h2>
                <p className="text-xl mb-6">Smart TV DLED 50" 4K Multilaser Roku TV com WiFi</p>
                <a 
                  href="https://mercadolivre.com/sec/1KfX4yw"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  💰 Melhor preço 4K | 📺 Roku TV rápido
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre Multilaser</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Multilaser é boa?</h3>
                  <p className="text-muted-foreground">Para o preço, sim! É a opção mais econômica para quem precisa de Smart TV. Não espere recursos premium, mas funciona bem para o básico.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Multilaser dura quanto tempo?</h3>
                  <p className="text-muted-foreground">De 3 a 5 anos com uso adequado. É uma TV de entrada, então a durabilidade é menor que marcas premium, mas compensa pelo preço baixo.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Vale a pena comprar Multilaser?</h3>
                  <p className="text-muted-foreground">Sim, se você tem orçamento limitado! É perfeita para primeira TV, quarto de hóspedes ou casa de praia. Escolha modelos com Roku para melhor desempenho.</p>
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

export default Multilaser;