import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Aiwa = () => {
  const models = [
    {
      name: "TV Aiwa AWS55U4",
      slug: "tv-aiwa-aws55u4-e-boa",
      size: "55\"",
      resolution: "4K",
      description: "55 polegadas 4K com Android",
      rating: 4.3
    },
    {
      name: "TV Aiwa Android TV",
      slug: "tv-aiwa-android-tv-e-boa",
      size: "Vários",
      resolution: "4K",
      description: "Sistema Android atualizado",
      rating: 4.2
    },
    {
      name: "TV Aiwa 50\" 4K",
      slug: "tv-aiwa-50-4k-e-boa",
      size: "50\"",
      resolution: "4K",
      description: "Ideal para streaming",
      rating: 4.1
    },
    {
      name: "TV Aiwa 43 AWS43FHD",
      slug: "tv-aiwa-43-aws43fhd-e-boa",
      size: "43\"",
      resolution: "Full HD",
      description: "Full HD ainda vale",
      rating: 4.0
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Aiwa é boa? Análise Completa 2025 | Melhores Reviews</title>
        <meta name="description" content="Descubra se TV Aiwa é boa! Análise dos modelos 4K com Android TV e Dolby Vision. Comparativo de qualidade e preço 2025." />
        <meta name="keywords" content="tv aiwa é boa, aiwa android tv, tv aiwa 55, aiwa 4k, dolby vision" />
        <meta property="og:title" content="TV Aiwa é boa? Guia Completo Android TV 2025" />
        <meta property="og:description" content="Análise completa das TVs Aiwa com Android e Dolby Vision!" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/aiwa" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Tecnologia Japonesa Acessível</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TV Aiwa é boa?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Análise completa da marca com Android TV e tecnologia Dolby Vision & Atmos. 
              Descubra se Aiwa vale a pena em 2025.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que Aiwa?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Herança Japonesa</h3>
                  <p className="text-sm text-muted-foreground">Tradição em áudio e vídeo</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Dolby Vision & Atmos</h3>
                  <p className="text-sm text-muted-foreground">Imagem e som premium</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Android TV</h3>
                  <p className="text-sm text-muted-foreground">Sistema completo e versátil</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Design Moderno</h3>
                  <p className="text-sm text-muted-foreground">Borda ultrafina elegante</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Modelos Aiwa Analisados</h2>
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
                <h2 className="text-3xl font-bold mb-4">🔥 Oferta Especial Aiwa</h2>
                <p className="text-xl mb-6">Smart TV AIWA 55" Android 4K Borda Ultrafina Dolby Vision & Atmos</p>
                <a 
                  href="https://mercadolivre.com/sec/2S1Tk5Z"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Ver Preço no Mercado Livre →
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  🎬 Dolby Vision & Atmos | 📱 Android TV completo
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes sobre Aiwa</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">TV Aiwa é boa?</h3>
                  <p className="text-muted-foreground">Sim! Aiwa oferece recursos premium como Dolby Vision e Atmos a preços competitivos. Android TV garante versatilidade.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Aiwa Android TV é confiável?</h3>
                  <p className="text-muted-foreground">Sim! O Android TV é mantido pelo Google com atualizações regulares. Oferece acesso a todos os apps e recursos.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">O que é Dolby Vision e Atmos?</h3>
                  <p className="text-muted-foreground">Dolby Vision melhora cores e contraste em conteúdo HDR. Dolby Atmos oferece áudio imersivo tridimensional. Ambos elevam a experiência.</p>
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

export default Aiwa;