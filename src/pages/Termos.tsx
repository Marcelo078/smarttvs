import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar o site Melhores Reviews, você concorda em cumprir e ficar 
              vinculado aos seguintes termos e condições de uso. Se você não concordar com 
              qualquer parte destes termos, não deve usar nosso site.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">2. Uso do Conteúdo</h2>
            <p className="text-muted-foreground mb-3">
              Todo o conteúdo disponibilizado no Melhores Reviews, incluindo textos, imagens, 
              análises e avaliações, é fornecido apenas para fins informativos. Você pode:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Visualizar e ler o conteúdo para uso pessoal</li>
              <li>Compartilhar links para nossos artigos em redes sociais</li>
              <li>Citar trechos com atribuição adequada</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Você <strong>não pode</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Reproduzir, duplicar ou copiar conteúdo sem autorização</li>
              <li>Usar nosso conteúdo para fins comerciais sem permissão</li>
              <li>Modificar ou criar obras derivadas de nosso conteúdo</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">3. Divulgação de Afiliados</h2>
            <p className="text-muted-foreground">
              O Melhores Reviews participa do Programa de Afiliados do Mercado Livre. Isso 
              significa que recebemos comissões quando você faz uma compra através de nossos 
              links de afiliado, sem custo adicional para você. Essa receita nos ajuda a 
              manter o site funcionando e a continuar produzindo conteúdo de qualidade.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">4. Precisão das Informações</h2>
            <p className="text-muted-foreground">
              Nos esforçamos para fornecer informações precisas e atualizadas sobre produtos, 
              preços e especificações. No entanto, não podemos garantir que todas as informações 
              estejam sempre 100% corretas ou atualizadas. Os preços e disponibilidade de 
              produtos podem mudar sem aviso prévio. Recomendamos sempre verificar as 
              informações diretamente no site do vendedor antes de fazer uma compra.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">5. Isenção de Responsabilidade</h2>
            <p className="text-muted-foreground">
              As análises e opiniões expressas no Melhores Reviews são baseadas em nossa 
              pesquisa e análise. Não somos responsáveis por decisões de compra tomadas 
              com base em nosso conteúdo. Você deve fazer sua própria pesquisa e due diligence 
              antes de fazer qualquer compra.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">6. Links para Sites de Terceiros</h2>
            <p className="text-muted-foreground">
              Nosso site contém links para sites de terceiros, incluindo o Mercado Livre. 
              Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas 
              desses sites. Recomendamos que você leia os termos e políticas de qualquer 
              site de terceiro que visitar.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">7. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo original publicado no Melhores Reviews, incluindo textos, 
              gráficos, logos e design, é propriedade do Melhores Reviews ou de seus criadores 
              de conteúdo e está protegido por leis de direitos autorais brasileiras e 
              internacionais.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">8. Conduta do Usuário</h2>
            <p className="text-muted-foreground">Ao usar nosso site, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Não usar o site para fins ilegais</li>
              <li>Não tentar hackear ou comprometer a segurança do site</li>
              <li>Não publicar ou transmitir conteúdo ofensivo ou prejudicial</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">9. Modificações dos Termos</h2>
            <p className="text-muted-foreground">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
              Alterações entrarão em vigor imediatamente após a publicação no site. O uso 
              continuado do site após alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">10. Lei Aplicável</h2>
            <p className="text-muted-foreground">
              Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. 
              Quaisquer disputas relacionadas a estes termos serão submetidas à jurisdição 
              exclusiva dos tribunais brasileiros.
            </p>
          </section>

          <section className="bg-gradient-primary rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="opacity-90">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco 
              através do nosso formulário de contato.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Termos;
