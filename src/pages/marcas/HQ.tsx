import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, Building } from "lucide-react";
import { Link } from "react-router-dom";

const HQ = () => {
  const models = [
    {
      name: "TV HQ HQTV43N",
      slug: "tv-hq-hqtv43n-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Usado em escolas e órgãos públicos",
      rating: 4.0
    },
    {
      name: "Smart TV HQ 43\"",
      slug: "smart-tv-hq-43-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Vale a pena comprar?",
      rating: 3.9
    },
    {
      name: "TV HQ LED 32\"",
      slug: "tv-hq-led-32-e-boa",
      size: "32\"",
      resolution: "HD",
      description: "Alternativa barata",
      rating: 3.8
    },
    {
      name: "TV HQ 50\"",
      slug: "tv-hq-50-e-boa",
      size: "50\"",
      resolution: "Full HD",
      description: "Para quem quer economizar",
      rating: 3.9
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV HQ é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV HQ é boa! Análise da marca usada em licitações e órgãos públicos. HQ Android, modelos 32, 43 e 50 polegadas." />
        <meta name="keywords" content="tv hq é boa, hq android, tv hq 43, tv hq 32, tv hq 50, hqtv43n" />
        <meta property="og:title" content="TV HQ é boa? Guia Completo 2025" />
        <meta property="og:description" content="Análise da marca HQ usada em escolas e órgãos públicos!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/hq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Marca Institucional</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV HQ é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca HQ, conhecida por fornecer TVs para escolas e órgãos públicos. 
              Descubra se vale a pena para uso doméstico em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que HQ?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Uso Institucional</h3>
                  <p className="text-sm text-muted-foreground">Fornece para escolas e prefeituras</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Durabilidade</h3>
                  <p className="text-sm text-muted-foreground">Projetada para uso intenso</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Preço Justo</h3>
                  <p className="text-sm text-muted-foreground">Focada em custo-benefício</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Android 12</h3>
                  <p className="text-sm text-muted-foreground">Sistema atualizado</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos HQ Analisados</h2>
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
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial HQ</h2>
                <p className="text-xl mb-6">Smart TV HQ 32" HD Android 12 Design Slim</p>
                <a 
                  href="https://mercadolivre.com/sec/22A4Thh"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  🏢 Usada em órgãos públicos | 🛡️ Durabilidade comprovada
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre HQ</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV HQ é boa?</h3>
                  <p className="text-muted-foreground">Para uso básico, sim! A marca é focada em durabilidade e custo-benefício, sendo escolhida por escolas e órgãos públicos justamente por isso.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Por que HQ é usada em escolas?</h3>
                  <p className="text-muted-foreground">Pela durabilidade e preço competitivo em licitações. São TVs projetadas para uso intenso em ambientes educacionais.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">HQ Android trava?</h3>
                  <p className="text-muted-foreground">Os modelos com Android 12 são razoavelmente rápidos para o preço. Não espere a velocidade de TVs premium, mas funciona bem para streaming básico.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Vale a pena comprar HQ para casa?</h3>
                  <p className="text-muted-foreground">Sim, se você busca economia e durabilidade. Ideal para segundo ambiente, casa de praia ou para quem assiste principalmente TV aberta.</p>
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

export default HQ;