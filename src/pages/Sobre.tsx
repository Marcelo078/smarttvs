import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Star, Users, Target, Award } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-accent fill-accent" />
              <h2 className="text-2xl font-bold m-0">Nossa Missão</h2>
            </div>
            <p className="text-muted-foreground">
              O <strong>Melhores Reviews</strong> nasceu com um propósito claro: ajudar consumidores brasileiros 
              a fazer escolhas informadas na hora de comprar TVs. Sabemos que o mercado está repleto de opções, 
              marcas e modelos, e que nem sempre é fácil distinguir entre propaganda e realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Quem Somos</h3>
              <p className="text-muted-foreground text-sm">
                Somos uma equipe de entusiastas de tecnologia e análise de produtos. Nossa experiência 
                combina conhecimento técnico com a perspectiva do consumidor real.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <Target className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Nosso Método</h3>
              <p className="text-muted-foreground text-sm">
                Analisamos especificações técnicas, comparamos preços, lemos centenas de avaliações 
                de usuários reais e compilamos tudo em reviews completos e imparciais.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <Award className="h-8 w-8 text-accent mb-4" />
            <h2 className="text-2xl font-bold mb-4">O Que Nos Diferencia</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Análises Detalhadas:</strong> Vamos além das especificações básicas e 
                investigamos durabilidade, qualidade de imagem real e suporte pós-venda.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Comparações Honestas:</strong> Não temos medo de apontar defeitos 
                ou recomendar alternativas melhores quando necessário.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Foco no Custo-Benefício:</strong> Entendemos que nem todos podem comprar 
                o modelo mais caro. Destacamos as melhores opções em cada faixa de preço.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Atualizações Constantes:</strong> O mercado muda rapidamente. 
                Revisamos nossos conteúdos regularmente para refletir novos lançamentos e mudanças de preço.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Transparência Total</h2>
            <p className="mb-4 opacity-90">
              Participamos do Programa de Afiliados do Mercado Livre. Isso significa que quando você 
              clica em nossos links e faz uma compra, recebemos uma pequena comissão sem nenhum 
              custo adicional para você.
            </p>
            <p className="opacity-90">
              Essa comissão nos permite manter o site funcionando e continuar produzindo conteúdo 
              de qualidade. No entanto, isso <strong>nunca</strong> influencia nossas análises. 
              Somos rigorosos em manter nossa imparcialidade e recomendamos apenas produtos que 
              realmente acreditamos ser boas opções.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Sobre;
