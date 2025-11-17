import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Philco = () => {
  const models = [
    {
      name: "TV Philco PTV50",
      slug: "tv-philco-ptv50-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "Roku TV com Dolby Audio",
      rating: 4.2
    },
    {
      name: "TV Philco 32 Android",
      slug: "tv-philco-32-android-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Smart TV com Android",
      rating: 4.0
    },
    {
      name: "TV Philco 43",
      slug: "tv-philco-43-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Smart TV intermediária",
      rating: 4.1
    },
    {
      name: "TV Philco Fast TV",
      slug: "tv-philco-fast-tv-e-boa",
      size: "Vários",
      resolution: "HD/FHD",
      description: "Sistema Fast TV próprio",
      rating: 3.9
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Philco é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV Philco é boa! Análise detalhada dos modelos PTV50, Philco Roku, Android e Fast TV. Comparativos, avaliações e melhor custo-benefício 2025." />
        <meta name="keywords" content="tv philco é boa, philco roku, tv philco 50, tv philco 32, philco android, philco fast tv, tv philco vale a pena" />
        <meta property="og:title" content="TV Philco é boa? Guia Completo 2025 com Todos os Modelos" />
        <meta property="og:description" content="Análise completa das TVs Philco: Roku, Android e Fast TV. Descubra qual modelo tem melhor custo-benefício!" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/philco" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Marca Tradicional Brasileira</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV Philco é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca brasileira com tradição de mais de 90 anos. 
              Descubra se as TVs Philco com Roku, Android e Fast TV valem a pena em 2025.
            </p>
          </section>

          {/* Características da Marca */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Philco?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Marca Tradicional</h3>
                  <p className="text-sm text-muted-foreground">Mais de 90 anos de história no Brasil</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Bom Custo-Benefício</h3>
                  <p className="text-sm text-muted-foreground">Preços competitivos com boa qualidade</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Sistemas Variados</h3>
                  <p className="text-sm text-muted-foreground">Roku, Android e Fast TV próprio</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Assistência Nacional</h3>
                  <p className="text-sm text-muted-foreground">Rede de assistência em todo Brasil</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modelos Disponíveis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos Philco Analisados</h2>
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

          {/* Oferta Destaque */}
          <section className="mb-16">
            <Card className="border-4 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-8 text-center">
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial Philco</h2>
                <p className="text-xl mb-6">Smart TV 50" Philco PTV50VA4REGB Roku TV com Dolby Audio</p>
                <a 
                  href="https://mercadolivre.com/sec/2cBbM6G"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  ⚡ Melhor custo-benefício | 🚚 Frete grátis disponível
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre Philco</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Philco é uma boa marca?</h3>
                  <p className="text-muted-foreground">Sim! Philco é uma marca tradicional no Brasil com mais de 90 anos de história. Oferece ótimo custo-benefício com qualidade confiável.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Philco Roku TV é bom?</h3>
                  <p className="text-muted-foreground">O sistema Roku é considerado um dos melhores! Interface rápida, estável e com todos os principais apps de streaming. Muito superior ao Fast TV.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Philco trava muito?</h3>
                  <p className="text-muted-foreground">Os modelos com Roku e Android geralmente não travam. Já o Fast TV pode apresentar lentidão em modelos mais básicos. Recomendamos Roku para melhor desempenho.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Qual a garantia da TV Philco?</h3>
                  <p className="text-muted-foreground">12 meses de garantia oficial do fabricante, com assistência técnica em todo o Brasil.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">Encontre Mais Ofertas Philco</h2>
                <p className="text-muted-foreground mb-6">Confira todas as ofertas e promoções de TVs Philco</p>
                <a 
                  href="https://mercadolivre.com/sec/14GQgfK"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-3 px-6 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Ver Todas as Ofertas →
                </a>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Philco;