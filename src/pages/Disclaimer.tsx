import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="h-10 w-10 text-accent" />
          <h1 className="text-4xl font-bold m-0">Isenção de Responsabilidade</h1>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
            <p className="text-muted-foreground font-semibold">
              Leia atentamente esta isenção de responsabilidade antes de usar as informações 
              fornecidas no Melhores Reviews. Ao usar este site, você concorda com os termos 
              aqui estabelecidos.
            </p>
          </div>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">1. Natureza das Informações</h2>
            <p className="text-muted-foreground">
              O conteúdo fornecido no Melhores Reviews é apenas para fins informativos e 
              educacionais. Nossas análises, opiniões e recomendações não devem ser consideradas 
              como aconselhamento profissional ou garantia de desempenho do produto.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">2. Precisão das Informações</h2>
            <p className="text-muted-foreground mb-3">
              Embora nos esforcemos para fornecer informações precisas e atualizadas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Não garantimos a completude, confiabilidade ou precisão de qualquer informação 
                em nosso site
              </li>
              <li>
                Especificações de produtos, preços e disponibilidade podem mudar sem aviso 
                prévio
              </li>
              <li>
                Erros ou omissões podem ocorrer, e não somos responsáveis por quaisquer 
                imprecisões
              </li>
              <li>
                As informações são fornecidas "como estão" sem garantias de qualquer tipo
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">3. Decisões de Compra</h2>
            <p className="text-muted-foreground">
              Você é o único responsável por suas decisões de compra. Recomendamos fortemente 
              que você:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Realize sua própria pesquisa antes de fazer qualquer compra</li>
              <li>Verifique especificações e preços diretamente com o vendedor</li>
              <li>Leia as políticas de devolução e garantia do vendedor</li>
              <li>Compare múltiplas fontes de informação</li>
              <li>Considere suas necessidades e circunstâncias específicas</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">4. Links de Afiliados</h2>
            <p className="text-muted-foreground">
              Este site contém links de afiliados para produtos vendidos no Mercado Livre. 
              Recebemos comissões por compras realizadas através desses links. No entanto:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Não somos vendedores dos produtos</li>
              <li>Não temos controle sobre a qualidade, disponibilidade ou entrega dos produtos</li>
              <li>Não somos responsáveis por transações entre você e o vendedor</li>
              <li>Questões relacionadas a compras devem ser resolvidas diretamente com o Mercado Livre</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">5. Opiniões e Análises</h2>
            <p className="text-muted-foreground">
              Nossas análises e opiniões são baseadas em:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Pesquisa de especificações técnicas</li>
              <li>Análise de avaliações de usuários</li>
              <li>Comparações de mercado</li>
              <li>Nossa própria interpretação e experiência</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Essas opiniões são subjetivas e podem diferir da sua experiência pessoal. 
              Resultados individuais podem variar significativamente.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">6. Garantias e Suporte</h2>
            <p className="text-muted-foreground">
              Informações sobre garantias, suporte técnico e assistência pós-venda são 
              fornecidas apenas como referência. Você deve:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Verificar os termos de garantia diretamente com o fabricante ou vendedor</li>
              <li>Entender que políticas de garantia podem mudar</li>
              <li>Contactar o fabricante ou vendedor para questões de suporte</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-3">
              Na máxima extensão permitida por lei, o Melhores Reviews e seus criadores não 
              serão responsáveis por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Perdas diretas ou indiretas decorrentes do uso de nossas informações</li>
              <li>Decisões de compra baseadas em nosso conteúdo</li>
              <li>Problemas com produtos adquiridos através de nossos links</li>
              <li>Imprecisões ou erros em nosso conteúdo</li>
              <li>Mudanças em preços, especificações ou disponibilidade de produtos</li>
              <li>Qualquer dano decorrente de confiança em nossas informações</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">8. Links Externos</h2>
            <p className="text-muted-foreground">
              Nosso site pode conter links para sites de terceiros, incluindo o Mercado Livre. 
              Não somos responsáveis pelo conteúdo, políticas ou práticas desses sites externos. 
              O acesso a sites de terceiros é por sua conta e risco.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">9. Mudanças de Produtos</h2>
            <p className="text-muted-foreground">
              Fabricantes podem alterar especificações, design e características de produtos 
              sem aviso prévio. Nossas análises podem não refletir as versões mais recentes 
              de produtos. Sempre verifique as especificações atuais antes da compra.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">10. Atualizações desta Isenção</h2>
            <p className="text-muted-foreground">
              Reservamos o direito de modificar esta isenção de responsabilidade a qualquer 
              momento. Mudanças entrarão em vigor imediatamente após publicação no site. 
              É sua responsabilidade revisar esta página periodicamente.
            </p>
          </section>

          <section className="bg-gradient-primary rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
            <p className="opacity-90">
              Ao usar o Melhores Reviews, você reconhece ter lido, compreendido e concordado 
              com esta Isenção de Responsabilidade. Se você não concordar com qualquer parte 
              desta isenção, não deve usar nosso site ou confiar em nossas informações.
            </p>
            <p className="mt-3 opacity-90">
              Use nosso site como uma ferramenta de pesquisa, mas sempre faça sua própria 
              due diligence e tome decisões informadas baseadas em múltiplas fontes.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Disclaimer;
