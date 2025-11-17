import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DollarSign, Eye, Shield, TrendingUp } from "lucide-react";

const Transparencia = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Transparência e Ética</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <div className="bg-gradient-primary rounded-lg p-8 text-white mb-8">
            <p className="text-lg opacity-90">
              No Melhores Reviews, acreditamos que a transparência é fundamental para construir 
              confiança com nossos leitores. Esta página explica como operamos, como ganhamos 
              dinheiro e como mantemos nossa integridade editorial.
            </p>
          </div>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold m-0">Como Ganhamos Dinheiro</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              O Melhores Reviews é monetizado através do Programa de Afiliados do Mercado Livre. 
              Veja como isso funciona:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Quando você clica em um link de produto em nosso site e faz uma compra no 
                Mercado Livre, recebemos uma pequena comissão (geralmente entre 1% e 5% do 
                valor da compra)
              </li>
              <li>
                Esta comissão não afeta o preço que você paga - você paga exatamente o mesmo 
                preço que pagaria acessando o Mercado Livre diretamente
              </li>
              <li>
                Esta é nossa principal fonte de receita e nos permite manter o site gratuito 
                para todos os visitantes
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold m-0">Nossa Política Editorial</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Mantemos uma clara separação entre nossas relações comerciais e nosso conteúdo 
              editorial:
            </p>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-bold mb-2">❌ O Que NÃO Fazemos:</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Aceitar pagamento de marcas para reviews favoráveis</li>
                  <li>Esconder aspectos negativos de produtos por motivos comerciais</li>
                  <li>Recomendar produtos apenas porque oferecem comissões maiores</li>
                  <li>Permitir que anunciantes influenciem nossas análises</li>
                </ul>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">✅ O Que Fazemos:</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li>Análises honestas baseadas em especificações e avaliações reais</li>
                  <li>Destacar prós E contras de cada produto</li>
                  <li>Recomendar alternativas quando um produto não vale a pena</li>
                  <li>Atualizar reviews quando surgem novos problemas ou melhorias</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold m-0">Metodologia de Análise</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Nossas análises seguem um processo rigoroso:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Pesquisa Técnica:</strong> Analisamos especificações oficiais, 
                fichas técnicas e documentação do fabricante
              </li>
              <li>
                <strong>Análise de Avaliações:</strong> Lemos centenas de avaliações de 
                usuários reais no Mercado Livre e outros sites
              </li>
              <li>
                <strong>Comparação de Mercado:</strong> Comparamos o produto com alternativas 
                similares em termos de preço e características
              </li>
              <li>
                <strong>Verificação de Reputação:</strong> Investigamos o histórico da marca 
                e do modelo específico
              </li>
              <li>
                <strong>Análise Custo-Benefício:</strong> Avaliamos se o produto oferece 
                bom valor pelo preço cobrado
              </li>
            </ol>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold m-0">Atualizações e Correções</h2>
            </div>
            <p className="text-muted-foreground mb-3">
              O mercado de tecnologia muda rapidamente. Nosso compromisso:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Revisamos nossos artigos regularmente (pelo menos trimestralmente) para 
                garantir que as informações estejam atualizadas
              </li>
              <li>
                Corrigimos erros prontamente assim que são identificados
              </li>
              <li>
                Adicionamos avisos quando produtos ficam indisponíveis ou há mudanças 
                significativas
              </li>
              <li>
                Incluímos a data da última atualização em cada artigo
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Limitações</h2>
            <p className="text-muted-foreground mb-3">
              É importante entender o que podemos e não podemos fazer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Não testamos fisicamente todos os produtos:</strong> Nossas análises 
                são baseadas em pesquisa, especificações e avaliações de usuários reais
              </li>
              <li>
                <strong>Preços mudam constantemente:</strong> Os preços que mencionamos podem 
                não refletir o valor atual. Sempre verifique no Mercado Livre
              </li>
              <li>
                <strong>Experiências individuais variam:</strong> Um produto pode funcionar 
                bem para alguns e não para outros
              </li>
            </ul>
          </section>

          <section className="bg-gradient-primary rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Nosso Compromisso com Você</h2>
            <p className="mb-3 opacity-90">
              Prometemos continuar:
            </p>
            <ul className="space-y-2 opacity-90">
              <li>✓ Fornecendo análises honestas e imparciais</li>
              <li>✓ Sendo transparentes sobre nossas fontes de receita</li>
              <li>✓ Priorizando a confiança do leitor acima de lucros</li>
              <li>✓ Melhorando constantemente nosso conteúdo</li>
              <li>✓ Sendo responsáveis pelas informações que publicamos</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Feedback e Contato</h2>
            <p className="text-muted-foreground">
              Se você encontrar erros em nossos artigos, tiver sugestões de melhoria ou 
              dúvidas sobre nossa metodologia, adoraríamos ouvir de você. Seu feedback 
              nos ajuda a melhorar e manter os mais altos padrões de qualidade e transparência.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Transparencia;
