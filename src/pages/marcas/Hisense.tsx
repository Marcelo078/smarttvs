import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hisense = () => {
  const modelos = [
    {
      nome: "TV Hisense 40A4N",
      titulo: "TV Hisense 40A4N é boa? Vale a pena comprar em 2025?",
      descricao: "Smart TV FHD 40\" com DTS Virtual X, Game Mode e controle por voz",
      link: "/artigos/tv-hisense-40a4n-e-boa",
      tags: ["40 polegadas", "Full HD", "Smart TV", "Alexa"]
    },
    {
      nome: "TV Hisense A6H",
      titulo: "TV Hisense A6H é boa? Vale a pena comprar em 2025?",
      descricao: "Análise completa do modelo A6H com comparativo e especificações",
      link: "/",
      tags: ["Smart TV", "4K", "HDR"]
    },
    {
      nome: "TV Hisense A6K",
      titulo: "TV Hisense A6K é boa? Comparativo com Samsung Crystal",
      descricao: "Comparação detalhada entre Hisense A6K e Samsung Crystal",
      link: "/",
      tags: ["4K", "Comparativo"]
    },
    {
      nome: "TV Hisense 55Q6N",
      titulo: "TV Hisense 55Q6N é boa? QLED 4K é realmente tudo isso?",
      descricao: "Análise da linha QLED da Hisense - Vale a tecnologia?",
      link: "/",
      tags: ["QLED", "55 polegadas", "4K"]
    },
    {
      nome: "TV Hisense U6H",
      titulo: "TV Hisense U6H é boa? ULED compensa o preço?",
      descricao: "Tudo sobre a tecnologia ULED e se vale o investimento",
      link: "/",
      tags: ["ULED", "Premium", "4K"]
    },
    {
      nome: "TV Hisense 65U60H",
      titulo: "TV Hisense 65U60H é boa? Análise completa Google TV",
      descricao: "Análise do modelo de 65 polegadas com Google TV integrado",
      link: "/",
      tags: ["65 polegadas", "Google TV", "4K"]
    },
    {
      nome: "TV Hisense 70A6K",
      titulo: "TV Hisense 70A6K é boa? TV gigante barata vale a pena?",
      descricao: "Vale a pena investir em uma TV de 70 polegadas barata?",
      link: "/",
      tags: ["70 polegadas", "Grande", "Custo-benefício"]
    },
    {
      nome: "TV Hisense 55A6V",
      titulo: "TV Hisense 55A6V é boa? Vidaa TV é confiável?",
      descricao: "Análise do sistema Vidaa TV e desempenho do modelo 55A6V",
      link: "/",
      tags: ["55 polegadas", "Vidaa TV", "4K"]
    },
    {
      nome: "TV Hisense 50A6G",
      titulo: "TV Hisense 50A6G é boa? Melhor custo-benefício do Brasil?",
      descricao: "Será que a 50A6G é realmente a melhor opção intermediária?",
      link: "/",
      tags: ["50 polegadas", "Custo-benefício", "4K"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>TV Hisense é Boa? Análises Completas de Todos os Modelos 2025</title>
        <meta 
          name="description" 
          content="Análises detalhadas de todas as TVs Hisense: 40A4N, A6H, A6K, 55Q6N, U6H e mais. Descubra qual modelo é ideal para você com reviews completos e comparativos." 
        />
        <meta 
          name="keywords" 
          content="TV Hisense é boa, Hisense 40A4N, Hisense A6H, Hisense QLED, TV Hisense análise, melhores TVs Hisense 2025" 
        />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/hisense" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para a página inicial
          </Link>

          <div className="space-y-8">
            {/* Hero Section */}
            <section className="space-y-4">
              <Badge className="mb-2">Marca</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">TV Hisense é Boa?</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Análises completas de todos os modelos Hisense disponíveis no Brasil. Descubra especificações, 
                prós e contras, comparativos e onde comprar com o melhor preço.
              </p>
            </section>

            {/* Sobre a Marca */}
            <Card className="bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl">Sobre a Marca Hisense</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A <strong>Hisense</strong> é uma das maiores fabricantes de eletrônicos do mundo, fundada em 1969 em 
                  Qingdao, China. Com mais de 50 anos de história, a empresa se consolidou como líder global em TVs, 
                  geladeiras, ar-condicionados e outros eletrodomésticos.
                </p>
                <p>
                  No Brasil, a Hisense ganhou destaque por oferecer <strong>tecnologia de ponta a preços competitivos</strong>, 
                  conquistando consumidores que buscam qualidade sem comprometer o orçamento. A marca investe constantemente 
                  em inovação, desenvolvendo tecnologias próprias como ULED e sistemas operacionais otimizados.
                </p>
                <p>
                  Com garantia local e suporte técnico crescente no país, a Hisense se posiciona como uma alternativa 
                  confiável às marcas tradicionais, oferecendo <strong>excelente custo-benefício</strong> em todas as 
                  categorias de televisores.
                </p>
                
                <div className="pt-4">
                  <Button asChild variant="default">
                    <a 
                      href="https://mercadolivre.com/sec/1PxhusR" 
                      target="_blank" 
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2"
                    >
                      Ver TVs Hisense no Mercado Livre
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Grid de Modelos */}
            <section className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Todos os Modelos Hisense Analisados</h2>
                <p className="text-muted-foreground">
                  Clique em qualquer modelo para ler a análise completa com especificações técnicas, 
                  prós e contras, e links de compra.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modelos.map((modelo, index) => (
                  <Link to={modelo.link} key={index} className="group">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {modelo.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {modelo.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {modelo.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* Perguntas sobre a Marca */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Perguntas Frequentes sobre TV Hisense</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">O que dizem da marca Hisense?</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  A Hisense é reconhecida por oferecer excelente custo-benefício, combinando tecnologia avançada com 
                  preços acessíveis. Consumidores elogiam a qualidade de imagem, durabilidade e recursos smart modernos. 
                  A marca vem ganhando cada vez mais espaço no mercado brasileiro como alternativa confiável.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quem é o fabricante da TV Hisense?</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  A Hisense é fabricada pela Hisense Group, conglomerado chinês fundado em 1969. É uma das três maiores 
                  fabricantes de TVs do mundo, com fábricas em diversos países e presença em mais de 160 mercados globais.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Qual é a marca de TV que dá menos problemas?</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Segundo pesquisas de satisfação, marcas como Sony, LG e Samsung lideram em durabilidade. No entanto, 
                  a Hisense vem se destacando positivamente nas avaliações recentes, com baixo índice de problemas técnicos 
                  e bom suporte pós-venda. A chave é comprar de vendedores confiáveis e seguir as instruções de uso.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vale a pena comprar TV Hisense em 2025?</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Sim, vale muito a pena. Em 2025, a Hisense continua sendo uma das melhores opções de custo-benefício 
                  no mercado brasileiro. A marca oferece tecnologias como QLED, ULED, Google TV e sistema Vidaa a preços 
                  significativamente mais baixos que concorrentes, sem comprometer a qualidade.
                </CardContent>
              </Card>
            </section>

            {/* CTA Final */}
            <Card className="bg-accent text-center">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Encontre a TV Hisense Ideal para Você</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore todos os modelos analisados acima e descubra qual TV Hisense oferece o melhor 
                  custo-benefício para suas necessidades. Garantia, preços competitivos e entrega rápida.
                </p>
                <Button asChild size="lg">
                  <a 
                    href="https://mercadolivre.com/sec/14GQgfK" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2"
                  >
                    Ver Todas as TVs Hisense
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Hisense;