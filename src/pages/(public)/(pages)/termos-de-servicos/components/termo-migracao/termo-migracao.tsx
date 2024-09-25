import './termos-migracao.css';

const TermsMigracao = () => {
  return (
    <div className="privacy-policy-container">
    <h1>Termos de Migração</h1>
    <div>
        <h2>Migração de contas</h2>
        <p>A PetroHost se compromete a realizar a tentativa de migração de sua
          conta hospedada em outro servidor, desde que sejam contas que
          utilizem o painel administrativo cPanel e não haja restrições às opções
          de “Full Backup”.</p>

        <p>Caso a estrutura utilizada seja diferente de cPanel, a equipe realizará
          a migração exclusivamente da estrutura do site e o banco de dados
          através de conexão FTP.</p>
        <p>
          Após a migração de sua conta, pequenos ajustes podem ser
          necessários, visto que pequenas particularidades de configuração
          podem diferir entre empresas de hospedagem. Nossa equipe de
          transferência se empenhará ao máximo para realizar com sucesso a
          transferência de sua conta, mas não podemos estimar o tempo
          necessário para cada transferência, visto que diversos fatores
          influenciam nesta atividade.
        </p>

        <p>Para formalizar a solicitação de migração de sua conta será
          necessário preencher o formulário disponível no Portal do Cliente.</p>

        <p>Importante: A PetroHost não realiza a migração de contas de e-mail
          em planos de Hospedagem de Sites (B, M, e Plus). Nestes planos, o
          cliente terá uma ferramenta fácil disponível no Portal do Cliente, para
          realizar as migrações de e-mails com rapidez, segurança e
          privacidade.</p>
        <p>Não realizamos, também, migrações entre planos de mesma
          categoria, contratados para a utilização de cupons de desconto em
          renovações, upgrades, downgrades ou alterações nos ciclos de
          pagamento.</p>
        <p>Para o perfeito desenrolar da migração é de fundamental importância
          a total disponibilidade e acessibilidade aos dados e sistemas no host
          de origem. Caso isso não aconteça, é de responsabilidade do cliente
          intermediar a obtenção, junto ao antigo host, dos dados para a
          migração. </p>
        <p>É de responsabilidade do cliente a alteração das DNS após a
          conclusão da migração, caso o cliente não faça essa alteração, a
          remigração estará sujeita a taxas.</p>
        <p>Em casos de migrações externas (para outras empresas) o cliente
          deve se responsabilizar pelo backup e transferência do conteúdo para
          o novo servidor, antes do cancelamento do produto na PetroHost. Nos
          planos de Hospedagem de Sites (B, M, e Plus) onde disponibilizamos
          o serviço de E-mail Profissional, é necessário que além do backup da
          hospedagem também seja realizado o backup dos e-mails a serem
          migrados.</p>
      </div>
</div>
  );
}

export default TermsMigracao;
