import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground">
              O Melhores Reviews coleta informações limitadas dos visitantes para melhorar a 
              experiência do usuário e entender como nosso conteúdo é utilizado:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
              <li>Informações técnicas (tipo de navegador, sistema operacional, endereço IP)</li>
              <li>Cookies para análise de tráfego e preferências</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-muted-foreground">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Melhorar o conteúdo e a estrutura do site</li>
              <li>Entender quais análises são mais úteis para nossos leitores</li>
              <li>Personalizar a experiência de navegação</li>
              <li>Analisar tendências e padrões de uso</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
            <p className="text-muted-foreground">
              Utilizamos cookies para melhorar sua experiência. Cookies são pequenos arquivos 
              armazenados no seu dispositivo que nos ajudam a lembrar suas preferências e 
              entender como você usa nosso site. Você pode configurar seu navegador para 
              recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">4. Links de Afiliados</h2>
            <p className="text-muted-foreground">
              Nosso site contém links de afiliados para o Mercado Livre. Quando você clica 
              nesses links, o Mercado Livre pode coletar informações sobre sua visita de 
              acordo com suas próprias políticas de privacidade. Recomendamos que você revise 
              a política de privacidade do Mercado Livre para entender como eles lidam com 
              seus dados.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
              para fins de marketing. Podemos compartilhar dados agregados e anônimos para 
              análise estatística.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">6. Segurança</h2>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança apropriadas para proteger suas informações 
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">7. Seus Direitos</h2>
            <p className="text-muted-foreground">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Solicitar informações sobre dados que coletamos</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento para uso de dados</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">8. Alterações nesta Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos 
              que você revise esta página regularmente para se manter informado sobre como 
              protegemos suas informações.
            </p>
          </section>

          <section className="bg-gradient-primary rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="opacity-90">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos 
              seus dados, entre em contato conosco através do nosso formulário de contato.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Privacidade;
