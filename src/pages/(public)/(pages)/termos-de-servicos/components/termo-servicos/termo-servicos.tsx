
import { useState } from 'react';
import './termos-servicos.css';

const TermsServicos = () => {


  const [lerMais,setLerMais]=useState(true)

  const ativeTodoConteudo=()=>{
    if(lerMais===false){
      setLerMais(true)
    }
    if(lerMais===true){
      setLerMais(false)
    }
  }
  return (
    <div className="privacy-policy-container">
      <div>
        <p>Para utilizar os serviços da PETROHOST  o cliente deve ler e
          concordar com nossos Termos de Serviço.</p>
      </div>
      <div>
        <h1>Tipos de Planos de
          Hospedagem</h1>
      </div>
      <div>
        <h2>Servidores Compartilhados
        </h2>
        <p>São servidores cujos recursos são compartilhados entre diversos
          clientes. São exemplos de Servidores Compartilhados:</p>
        <ul>
          <p>Planos de Hospedagem de Site:</p>
          <ul>
            <li>Planos M, Plus, B</li>
            <li>Hospedagem Windows</li>
          </ul>
          <li>Hospedagem WordPress</li>
          <li>E-mail corporativo</li>
          <li>Revenda de Hospedagem</li>
        </ul>
      </div>
      <div>
        <h2>VPS
        </h2>
        <p>VPS é a sigla para Virtual Private Server, ou Servidor Virtual Privado
          (como é chamado em português) e pode ser definido como um espaço
          “isolado” (servidor virtual) dentro de um servidor físico.</p>
      </div>
      <div>
        <h2>Servidores Dedicados</h2>
        <p>Servidor dedicado é uma máquina física com recursos de hardware
          dedicados ao seu projeto.</p>
      </div>
      <div>
        <h1> Ativação de contas / e-mail
          utilizado para cadastro </h1>

        <div>
          <p>
            Sua conta será ativada após a efetiva confirmação de recebimento do
            pagamento referente ao(s) serviço(s) contratado(s). Esta confirmação
            será obtida junto a instituição financeira responsável pelo
            processamento da transação e validada após comprovação de
            legitimidade. No ato da contratação do serviço o cliente deverá
            cadastrar um e-mail não pertencente a um dos domínios que irá
            hospedar em seu plano. Este e-mail será utilizado para comunicação
            entre a PetroHost e o cliente, portanto é responsabilidade do cliente
            manter seu cadastro sempre atualizado. Fornecer falsas informações
            de identificação resultará no cancelamento de sua conta. Para saber
            como os seus dados pessoais poderão ser tratados pela Petrohost,
            consulte a nossa Política de Privacidade, disponível aqui
            Para qualquer tipo de contratação feita com cartão de crédito, poderá
            ser solicitado o envio de informações que comprovem a legitimidade
            da compra. Caso esta solicitação não seja atendida, o pedido poderá
            ser considerado fraudulento e, consequentemente, negado.
            Importante: Alguns clientes que utilizam sistemas de e-mail da
            Microsoft (hotmail.com, msn.com, etc) têm observado que os e-mails
            enviados automaticamente por nosso sistema são equivocadamente
            desviados para a pasta “Lixo Eletrônico”. Caso você utilize um destes
            provedores de e-mail, certifique-se de adicionar os endereços da
            PetroHost em sua lista de “Remetentes confiáveis”.
          </p>
        </div>
      </div>
     

     <div  style={{display:lerMais?"none":"block",flexDirection:"column"}} >
     <div>
        <h2>Pessoas Proibidas (Países,
          Regiões, Entidades e
          Indivíduos)</h2>

        <div>
          <p>Os serviços estão sujeitos a leis e regulamentos de controle de
            exportação e sanções econômicas administrados ou aplicados pelo
            Departamento de Comércio dos Estados Unidos, pelo Escritório de
            Controle de Ativos Estrangeiros do Departamento de Tesouraria
            (“OFAC”), pelo Departamento de Estado e por outras autoridades dos
            Estados Unidos (coletivamente, “Leis comerciais dos EUA”).</p>


          <p>Você não pode usar os serviços para exportar ou reexportar, nem
            permitir a exportação ou reexportação de software ou dados técnicos,
            violando as Leis de Comércio dos EUA. Além disso, ao usar os
            Serviços, você declara e garante que não é: (a) um indivíduo,
            organização ou entidade organizada ou localizada em um país ou
            território que é alvo das sanções da OFAC (incluindo Cuba, Irã, Síria,
            Coréia do Norte, ou a região da Crimeia da Ucrânia); (b) designado
            como OFAC Nacional ou Especialmente Designado pela OFAC ou de
            outra forma possuído, controlado ou agindo em nome de tal pessoa;
            (c) caso contrário, uma parte proibida sob as leis comerciais dos EUA;
            ou (d) tenha envolvimento com atividades relacionadas a armas
            nucleares, mísseis, armas químicas ou biológicas para as quais os
            EUA não possam operar sem uma licença do Governo dos EUA. A
            menos que seja fornecido de outra forma com permissão explícita por
            escrito, a PetroHost também não registra e proíbe o uso de qualquer
            um dos nossos serviços em conexão com qualquer Nome de Domínio
            de Nível Superior com Código de País (“ccTLD”) para qualquer país
            ou território que seja o destino de Sanções da OFAC. As obrigações
            sob esta seção subsistirão a qualquer rescisão ou vencimento deste
            contrato ou ao uso dos serviços.</p>
        </div>
      </div>
      <div>
        <h2>Conteúdo</h2>
        <div>
          <p>Não é permitido em hipótese alguma sites de leilões, sites de IPTV,
            sites de rifa e jogos em servidores compartilhados.
            Todos os serviços oferecidos pela PetroHost são para propósitos
            legais. O cliente deve concordar em isentar a PetroHost de qualquer
            responsabilidade pelo uso indevido de seus serviços. </p>
          <p> É
            expressamente proibida a utilização de nossos serviços de tal maneira
            que possam desrespeitar os registros de marcas e patentes e/ou
            infringir termos de direitos autorais e cessão de propriedade
            intelectual. Isso inclui – mas não se limita – à divulgação e distribuição
            não-autorizada de músicas, vídeos, livros, fotografias ou qualquer
            outro material protegido por lei. O comércio/divulgação de qualquer
            produto ilícito resultará no imediato cancelamento de sua conta.</p>
          <p>Se
            você acredita que seus direitos autorais e/ou marcas registradas estão
            sofrendo infrações através de serviços contratados junto a nós, por
            favor envie um e-mail para abuso@petrohost.ao com todas as
            informações pertinentes ao caso. A lista de informações necessárias
            podem ser encontradas na nossa Política de Direitos Autorais. </p>

          <p>Exemplos de materiais inaceitáveis em servidores
            compartilhados: Streaming e armazenamento de arquivos de
            áudio/vídeo, conteúdo que faça apologia ou que facilite a aquisição de
            itens ilegais como drogas ou venda de armas de fogo pela internet,
            bots de IRC, scripts de web-proxy e/ou de navegação anônima
            (anonymizers), programas sem licenças (pirateados), sites e fóruns
            que distribuam ou divulguem cracks/cheats/warez, arquivos
            executáveis (*.exe, *.com, *.msi, etc) e de imagens de disco (*.img,
            *.iso, *.nrg, *.bin, etc), mirrors (espelhamentos de outros sites),
            repositório de dados, exclusivos serviços de banner-ad (banners
            rotativos), servidores de afiliação, scripts de topsites, escrow
            (atividades financeiras que envolvem caução), HYIP/PIAR (High-Yield
            Interest Programs/Programas de Investimento de Alto Risco) e afins,
            sites de investimentos como Forex e e-Gold Exchange, AutoSurf
            (sistemas de trocas de visitas), programas fraudulentos (Bank
            Debenture Trading Programs, Prime Banks Programs, etc), sites de
            loterias, MUD/RPG, mineração de criptomoedas, sites que estimulam
            racismo/ódio/fanatismo, sites relacionados a “hackerismo”, scripts
            maliciosos (como “IP scanner”, ataques de descobertas de
            senha/brute-force, envio em massa de e-mails), sites que
            hospedem/divulguem qualquer tipo de malware (pragas virtuais), e
            todo e qualquer tipo de site que promova/divulgue atividades ilegais.
            Uma conta em servidor compartilhado não pode ser utilizada como um
            dispositivo de backup/armazenamento (com exceção de 1 backup de
            sua própria conta de cPanel). Da mesma forma, não é permitido
            disponibilizar arquivos para download. </p>

          <p>Exemplos de materiais inaceitáveis em planos de Servidores
            Dedicados e VPSs: Programas sem licenças (pirateados), sites e
            fóruns que distribuam ou divulguem cracks/cheats/warez, escrow
            (atividades financeiras que envolvem caução), HYIP/PIAR (High-Yield
            Interest Programs/Programas de Investimento de Alto Risco) e afins,
            sites de investimentos como Forex e e-Gold Exchange, comércio de
            qualquer produto/mercadoria sem a devida propriedade ou explícita
            permissão, AutoSurf/PTC/PTS/PPC sites (sistemas de trocas de
            visitas), programas fraudulentos (Bank Debenture Trading Programs,
            Prime Banks Programs, etc), mineração de criptomoedas, sites de
            loterias, sites que estimulam racismo/ódio/fanatismo, sites
            relacionados a “hackerismo”, scripts maliciosos (como “IP scanner”,
            ataques de descobertas de senha/brute-force, envio em massa de e
            mails), sites que hospedem/divulguem qualquer tipo de malware
            (pragas virtuais), sites que promovem IPTV e todo e qualquer tipo de
            site que promova/divulgue atividades ilegais. Sites de leilões e de
            financeiras somente serão aceitos mediante comprovação do
            exercício legal através de documentação.</p>

          <p>É de responsabilidade do cliente manter sua conta segura. Contas
            inseguras podem ser encerradas ou ter acesso aos serviços
            suspensos. Se você não remover o conteúdo malicioso da sua conta
            depois de ser notificado pela PetroHost de um problema, nos
            reservamos o direito de bloquear o acesso aos serviços.</p>
          <p>Sempre que um script em sua conta estiver consumindo muitos
            recursos ou enviando SPAM, ele será verificado pelo nosso sistema
            anti-malware. Se algum código malicioso for identificado, o script será
            movido para quarentena automaticamente sem notificação.</p>

          <p>Caso você acredite que seu script foi movido de forma equivocada,
            entre em contato com nosso suporte para que uma revisão manual
            seja realizada (para abrir o chamado, informe o nome do arquivo e
            para que ele é utilizado).</p>

          <p>
            Reservamo-nos o direito de recusar a prestação de serviços ou a
            disponibilidade de recursos a qualquer indivíduo. A PetroHost também
            pode encerrar seus serviços, total ou parcialmente, incluindo a
            exclusão ou confisco de todos os arquivos, conteúdo e / ou registros
            de nomes de domínio sem aviso prévio para cumprir a lei aplicável.
            Qualquer material que julgarmos obsceno, ilegal ou que viole esses
            termos de serviço será removido de nossos servidores com ou sem
            aviso prévio. Há uma tolerância máxima de 48 horas para o cliente
            responder a qualquer e-mail enviado a ele por meio de nosso sistema
            de tickets. A falha em responder a um e-mail enviado pelo
            departamento de denúncia abuso@petrohost.ao dentro de 48 horas
            pode resultar na suspensão ou no cancelamento da sua conta.
          </p>

          <p>Todos
            os assuntos relacionados a reclamações devem ser tratados via ticket
            / e-mail.
            Se não estiver totalmente seguro sobre a legalidade de hospedar
            conosco seus sites/serviços, por favor, entre em contato através do e
            mail abuso@petrohost.ao, descrevendo as funcionalidades de sua
            atividade e assinalando pontos determinantes que possam ou não
            gerar dúvidas sobre a aceitação do mesmo. Ficaremos muito
            satisfeitos em atendê-lo. </p>

          <p>
            É proibido hospedar, distribuir ou vincular material de abuso sexual
            infantil (CSAM, sigla para Child Sexual Abuse Material) ou conteúdo
            que seja prejudicial a menores. O CSAM será suspenso
            imediatamente sem aviso prévio e relatado às autoridades policiais
            e/ou outras autoridades competentes.
            Nota aos revendedores: se uma de suas contas apresentar este tipo
            de infração, nós iremos suspendê-la e lhe notificar para que você
            mesmo a encerre. Além disso, iremos monitorar as demais contas, e
            caso haja uma nova infração deste gênero em sua revenda, sua conta
            principal poderá ser cancelada.
            É expressamente proibido hospedar qualquer tipo de conteúdo do tipo
            pirâmide, bem como TelexFree, BBOM etc.
          </p>

          <p>
            É de absoluta responsabilidade do cliente assegurar-se de que os
            scripts/programas instalados em sua conta sejam seguros e que as
            permissões de suas pastas/diretórios estejam definidas corretamente
            (independente do método de instalação utilizado). Pastas/diretórios
            devem ser configurados com permissão 755 (ou mais restritiva).
            Arquivos devem ser configurados com permissão 644 (ou mais
            restritiva). O cliente é o único responsável por todas as ações
            decorrentes de utilização de sua conta, e isso inclui a preservação da
            segurança de suas credenciais de acesso aos sistemas (login/senha).
            É fundamental que os clientes utilizem sempre senhas seguras. Se
            uma senha insegura for detectada, sua conta pode ser suspensa até
            que você defina uma nova senha (comprida, complexa e de difícil
            dedução).
          </p>

          <p>
            A PetroHost poderá alterar as versões dos softwares/serviços
            disponíveis nos servidores sempre que houver a necessidade de
            implementações de segurança e/ou atualizações em nossa estrutura.
            O cliente, neste caso, deverá assegurar que suas aplicações sejam
            compatíveis com as atualizações realizadas.
          </p>

          <p>
            Auditorias periódicas podem ser realizadas em nossos servidores para
            evitar que senhas inseguras possam ser utilizadas. Se uma auditoria
            apontar uma senha insegura em sua conta, lhe enviaremos uma
            notificação com um prazo máximo para alteração da mesma.

          </p>

          <p>
            Recomendamos sempre a utilização de senhas longas (com pelo
            menos 12 caracteres), alternando entre letras maiúsculas e
            minúsculas, números e caracteres especiais.
          </p>
        </div>
      </div>

      <div>
        <h2> Política de tolerância zero
          contra SPAM </h2>
        <div>
          <p>
            A PetroHost defende, apoia e aplica a política de TOLERÂNCIA ZERO
            contra o envio de e-mails em massa, mensagens não-solicitadas
            (sejam elas de qualquer espécie e para qualquer propósito) e SPAM.
            Mecanismos de Safelists serão considerados e tratados como SPAM.
            Qualquer conta que for utilizada para enviar SPAM será encerrada
            com ou sem aviso prévio.
          </p>
          <p>Por favor, acesse e conheça nossa Política de Utilização de E-mails.
            Como forma de prevenção e combate ao SPAM, limitamos o número
            de e-mails que podem ser enviados por domínio nas primeiras 24h
            após a compra de um plano de Hospedagem de Sites (P, M, Turbo),
            Hospedagem WordPress e Hospedagem Empresarial Plus. Nas
            primeiras 24h após a criação da conta no servidor, o cliente poderá
            enviar no máximo 25 e-mails por hora (por domínio). O número de
            domínios e/ou subdomínios que podem ser inseridos na conta nesse
            período é de, no máximo, 5. Após o prazo de 24h, a limitação é
            removida, e passam a valer as regras descritas na Política de
            Utilização de E-mails.</p>

          <p>Sites que fazem anúncios e divulgações através de SPAM
            (Spamvertised) não podem ser hospedados em nossos servidores.
            Esta norma inclui – mas não se limita a – SPAM enviados via fax, e
            mail, mensagens instantâneas ou Usenet/Newsgroups. Nenhuma
            organização ou entidade listada pelo ROKSO poderá fazer uso de
            nossos serviços. Qualquer conta que faça com que um dos IPs de
            nossos servidores sejam inseridos em uma blacklist será
            imediatamente suspensa e/ou encerrada.</p>

          <p>A PetroHost se reserva o direito de solicitar alterações em (ou
            desativar, se necessário for) qualquer website, conta, base de dados
            ou outro componente que não esteja em conformidade com as
            políticas estabelecidas. Nos reservamos ainda o direito de realizar
            modificações de caráter emergenciais fundamentadas em sensatos
            critérios. </p>
        </div>
      </div>

      <div>
        <h2>Informações sobre
          pagamentos</h2>

        <div>
          <p>Os pagamentos realizados à PetroHost são aceitos através de boleto
            bancário, cartões de crédito ou PayPal.</p>

          <p>As faturas com valores acima de R$150,00 referentes a produtos com
            ciclos de pagamento acima do mensal podem ser parceladas na
            modalidade de pagamento cartão de crédito, com a incidência de
            juros. O número de parcelas será limitado de acordo com o prazo da
            assinatura do produto.</p>


          <p>
            É de sua total responsabilidade manter em dia todos os seus
            compromissos de pagamentos, bem como o envio das informações
            que o identifiquem (quando o pagamento é realizado por métodos que
            exijam a comprovação). A mudança na data da fatura (segunda via)
            não muda a data de vencimento do plano. Portanto o plano continua
            vencendo na data original, e deverá ser paga no mês seguinte na data
            original de vencimento.
          </p>
        </div>
      </div>


      <div>
        <h2>Pré-pago</h2>
        <div>
          <p>Ao contratar nossos serviços você concorda em realizar
            antecipadamente o pagamento referente aos serviços contratados,
            durante toda a vigência do plano.</p>
        </div>
      </div>

      <div>
        <h2> Renovação automática</h2>
        <div>
          <p>Ao contratar nossos serviços você está de acordo com a renovação
            automática do plano por período igual ao último ciclo contratado. Para
            que renovação automática NÃO ocorra, será necessário que você
            manifeste sua explícita vontade de cancelar o serviço contratado.</p>

          <p>
            O
            cancelamento deve ser solicitado pelo menos 24 horas antes da data
            de vencimento do plano através do Portal do Cliente. Esta solicitação
            realizada no Portal do Cliente assegura a PetroHost o direito de
            imediatamente excluir as contas referentes ao plano cancelado. Esta
            operação é irreversível, portanto o cliente só deverá solicitar o
            cancelamento de sua conta após realizados os devidos backups.
          </p>

          <p>
            No
            caso de renovações de domínios feitos com cartão de crédito, caso
            não deseje renová-los, existe a necessidade de manifestação. Caso
            contrário os registros serão renovados automaticamente trinta (30)
            dias antes de seu vencimento conforme pagamento realizado.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1> Pagamentos em atraso</h1>
        </div>
        <div>
          <h2>Suspensão de serviços</h2>

          <div>
            <p>Contas com mais de 7 dias de atraso (em relação ao vencimento
              original da fatura) serão automaticamente suspensas. Após a quitação
              dos débitos a conta será reativada em até 1 dia útil (mediante a
              comprovação de pagamento).</p>
            <p>Em todos os planos oferecidos pela nossa empresa, qualquer
              pendência de pagamento de serviços adicionais resultará na
              suspensão geral do plano.</p>

            <div>
              <p>Contas suspensas por inadimplência financeira terão direito ao backup
                caso sejam reativadas mediante pagamento. O cliente tem todo o
                período de vigência do plano para pedir o backup a qualquer momento
                a partir do momento que a conta é suspensa, precisa reativar a conta.
                Confira as regras de suspensão de contas por inadimplência
                financeira:</p>
              <ul>
                <li>
                  <p>Hospedagem de Sites, Plus, Criador de Sites, Hospedagem
                    WordPress, Revenda de hospedagem e Plano de e-mail Titan (Ultra,
                    Premium e Essentials) - contas inadimplentes por 30 dias serão
                    removidas do servidor automaticamente. Após a remoção das contas
                    do servidor, o cliente não poderá mais requerer o backup, mesmo
                    após o pagamento.</p>
                </li>
                <li>
                  <p>Servidores VPS e Dedicados – contas suspensas por mais de 7
                    dias corridos serão removidas do servidor automaticamente. No caso
                    de cancelamento, não há como recuperar os arquivos após a
                    remoção da conta do servidor.</p>
                </li>
                <li>
                  <p>Backup Online CodeGuard – planos suspensos por inadimplência
                    financeira por mais de 7 dias serão cancelados automaticamente,
                    não havendo a possibilidade de restauração dos arquivos ou da
                    reativação do mesmo plano, mesmo se for realizado pagamento após
                    o efetivo cancelamento. </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2> Cobrança de Manutenção de Serviços de
            Hospedagem </h2>
          <div>
            <p>A cobrança de Manutenção de Serviços se aplica a todas as faturas
              renovação que contenham ao menos um produto de hospedagem e
              que não foram pagas até o dia do vencimento. O valor da Manutenção
              de Serviços é referente aos custos de manter dos serviços de
              hospedagem ativos por até 10 dias após o vencimento, que incluem
              custos de servidores e atendimento ao cliente. </p>
          </div>
        </div>

        <div>
          <h2>Fraudes</h2>
          <div>
            <p>É uma violação deste Acordo o uso indevido ou fraudulento de cartões
              de crédito, PayPal, boleto ou qualquer outro método de pagamento. A
              PetroHost pode relatar qualquer uso indevido ou fraudulento,
              conforme determinado a critério exclusivo da PetroHost, a autoridades
              governamentais e policiais, serviços de relatórios de crédito,
              instituições financeiras e/ou empresas de cartão de crédito. </p>
            <p>Pagamentos contestados às operadoras de cartões de crédito ou
              PayPal acarretarão na suspensão do serviço atrelado à fatura. Contas
              suspensas por contestações de pagamentos serão automaticamente
              encerradas após 60 dias.</p>
          </div>
        </div>
        <div>
          <h2>Reajustes</h2>
          <div>
            <p>A PetroHost reserva-se o direito de, a qualquer momento, alterar os
              valores dos planos anunciados, de acordo com as tendências do
              mercado.</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Backups (cópias de
          segurança)</h2>
        <div>
          <p>PetroHost NÃO se responsabiliza pelos arquivos e/ou dados
            armazenados na sua conta. O plano não lhe dá garantias de
            recuperação da informação perdida por qualquer eventualidade. O uso
            do Serviço é por sua conta e risco. Você assume total
            responsabilidade pelos arquivos armazenados em nossos servidores,
            assim como por manter suas próprias cópias de segurança (backup)
            fora do servidor, em um lugar seguro.</p>
          <p>Caso queira ter o nosso serviço de backup em sua conta, indicamos o
            serviço de backup online chamado CodeGuard que poderá ser
            adquirido através do seguinte  </p>
        </div>
        <div>
          <h2> Servidores compartilhados </h2>
          <p>Para a realização de trabalhos técnicos e estritamente para a nossa
            segurança, a PetroHost mantém uma rotina semanal de cópias de
            segurança dos arquivos de servidores compartilhados, o que não
            representa um backup completo dos serviços. </p>
          <p>
            O conteúdo da cópia de
            segurança se sobrescreve a cada fim de semana e é realizado
            exclusivamente para garantias internas. Apenas as contas com as
            seguintes características entram na nossa rotina de armazenamento:
          </p>

          <ul>
            <li>
              <p>Planos P, M e B: Contas com até 20GB de armazenamento em uso e
                até 100.000 inodes (arquivos, pastas, e-mails, etc).</p>
            </li>
            <li>
              <p>Plano M: Contas de até 20GB de armazenamento em uso e até
                250.000 inodes (arquivos, pastas, e-mails, etc). </p>
            </li>
            <li>
              <p>Revendas: Contas com até 20GB de armazenamento em uso e até
                100.000 inodes (arquivos, pastas, e-mails, etc).
                Caso a conta exceda os limites mencionados anteriormente, ela sairá
                automaticamente da nossa rotina de armazenamento.</p>
            </li>
          </ul>
          <p>Se você não possui um backup próprio e deseja que a nossa equipe
            de suporte realize a reparação a partir da nossa cópia de segurança,
            você pode solicitar o procedimento de restauração de backup (que
            incide na reconfiguração dos arquivos no ambiente da hospedagem),
            que é realizado mediante pagamento de uma taxa.
            A PetroHost não garante e não terá a obrigação de recuperar ou
            restaurar os dados a partir de nossa cópia de segurança, mas apenas
            se o cliente fornecer seu próprio backup válido para restauração dos
            dados.</p>
        </div>
        <div>
          <h1>Cancelamentos e
            reembolso </h1>
          <div>
            <p>Os clientes podem solicitar o cancelamento de um produto a qualquer
              momento através do Portal do Cliente. O reembolso é proporcional ao
              tempo que o produto/serviço não será utilizado (vide item 8.3 abaixo).</p>
          </div>

          <div>
            <h2> Método de recebimento </h2>
            <p>Ao solicitar o reembolso você pode selecionar o método de
              recebimento. O valor pode ser adicionado como crédito no seu Painel
              Financeiro ou reembolsado de acordo com o método utilizado durante
              o pagamento, para faturas pagas por cartão de crédito ou PayPal (vide
              item 8.3 abaixo).</p>
            <p>
              No caso de reembolso financeiro (cartão de crédito, depósito
              bancário), a devolução do valor será efetivada em até 10 dias úteis. A
              visualização dos estornos por cartão de crédito podem levar de uma a
              duas faturas, a depender da data de fechamento da fatura do cliente.
            </p>
            <p>Não haverá reembolso financeiro em contas bancárias de terceiros,
              apenas em contas bancárias em nome do titular da contratação.</p>
          </div>

          <div>
            <h2>Método para cálculo do reembolso</h2>
            <p>No caso de rescisão antecipada do plano, os reembolsos serão 
            processados da seguinte forma:</p>

            <ul>
              <li>
                <p>Planos de ciclos mensais têm direito a reembolso integral quando o 
cancelamento ocorrer até o sétimo dia após a contratação. Após esse 
período, não serão reembolsáveis.</p>
              </li>
              <li>
                <p>Planos em outros ciclos terão direito a reembolso integral até 30 dias 
após a contratação. Após esse período, o reembolso será feito de 
forma proporcional ao tempo de uso, com a aplicação de uma multa 
de 30% sobre o valor remanescente do plano.</p>
              </li>
            </ul>
          </div>



          <div>
            <h2>Casos em que não há reembolso</h2>
            <div>
              <p>Não haverá reembolso para planos com ciclo de pagamento mensal 
após o sétimo dia de atividade, Registro de Domínios, Google Apps 
(com exceção dos casos em que o cliente já possui uma conta ativa 
de e-mail profissional no Google), suporte, serviços avulsos, de 
instalação e taxas administrativas. Valores pagos com Créditos na 
conta HG também não serão reembolsados.</p>

<p>Além disso, é importante destacar que os domínios não são 
reembolsáveis e, em caso de contratação com domínio gratuito, no 
momento do cancelamento, esse domínio será descontado. </p>

<p>Essa política será válida para cancelamentos feitos a partir de 
29/05/2024</p>
            </div>
          </div>
        </div>
      </div>
      

      <div>

        <h1>Utilização dos recursos</h1>
        <div>
          <p>Usuários de servidores compartilhados NÃO podem: </p>
          <ul>
            <li>
              <p>
              Usar 25% ou mais dos recursos de processamento, memória, uso de 
disco, link com a Internet, etc. do servidor por períodos iguais ou 
superiores a 90 segundos. Existem inúmeras causas para que uma 
conta apresente este mau comportamento, como por exemplo: sites 
muito populares com grande número de acessos simultâneos, plugins 
em sistemas de gerenciamento de conteúdo, scripts mal 
desenvolvidos, CGI scripts, atividades de uso excessivo de FTP, 
PHP, HTTP, bancos de dados, etc;
              </p>
            </li>

            <li>
              <p>
              Ultrapassar o limite de 25 processos simultâneos por cPanel;
              </p>
            </li>
            <li>
              <p>
              Rodar aplicativos stand-alone no servidor. Isso inclui todo e qualquer 
              tipo de daemon, como por exemplo IRCd;
              </p>
            </li>

            <li>
              <p>
              Executar em servidores compartilhados qualquer tipo de web-spyder 
ou indexador (incluindo Google Cash / AdSpy); 
              </p>
            </li>

            <li>
              <p>
              Executar qualquer aplicação que interaja com redes de IRC (Internet 
                Relay Chat);
              </p>
            </li>
            <li>
              <p>
              Executar qualquer aplicação bit torrent, tracker e afins. É permitido 
utilizar links para torrents legalizados, mas não é permitido hospedá
los (armazená-los) em nossos servidores compartilhados;
              </p>
            </li>
            <li>
              <p>
              Participar de qualquer atividade de compartilhamento de arquivos 
(file-sharing) ou atividades peer-to-peer (p2p);
              </p>
            </li>
            <li>
              <p>
              Executar qualquer tipo de servidor de jogos, como por exemplo 
              Counter-Strike, Half-Life, BattleField1942, etc;
              </p>
            </li>

            <li>
              <p>
              Hospedar quaisquer tipos de programas executáveis (extensão .exe, 
                .com, .bat, etc) que possam ser ou estar contaminados por vírus;
              </p>
            </li>
            <li>
              <p>
              Agendar tarefas (cron jobs) com intervalos inferiores a 15 minutos; 
              </p>
            </li>
            <li>
              <p>
          Websites ou quaisquer outras aplicações com comportamentos 
(quaisquer que sejam) incompatíveis com ambiente compartilhado 
poderão ser suspensos e convidados a migrarem para um ambiente 
dedicado. 
              </p>
            </li>
            <li>
              <p>
              Inodes: Cada arquivo armazenado na hospedagem, por exemplo, 
uma página online, uma imagem, um documento, um e-mail, entre 
outros, conta como um (1) inode. Existem alguns limites, 
mencionados a seguir, para o uso de inodes nas contas hospedadas 
em servidores compartilhados.
              </p>
            </li>
            
          </ul>
          <p>O uso de mais de duzentos e cinquenta mil (250.000) inodes em 
qualquer conta dos planos Start, P, M e Business da Hospedagem de 
Sites compartilhada, ou qualquer conta de Revenda, pode resultar 
em uma advertência. Para o plano Turbo o limite é de quinhentos mil 
(500.000) inodes.</p>

<p>Caso as medidas necessárias para reduzir o uso excesso de inodes 
não sejam tomadas, a conta pode ser suspensa. 
As contas de usuários que constantemente criam e deletam uma 
grande quantidade de arquivos regularmente, que tenham centenas 
de milhares de arquivos, ou que causem danos no sistema de 
arquivos podem ser marcados para análise ou até suspensos, se 
estiverem causando danos maiores.</p>

<p>
A causa principal do uso excessivo de inodes é o catch all habilitado 
sem monitoramento da caixa de entrada ou da falta de eliminação 
dos e-mails não desejados. Com o tempo, se acumulam dezenas de 
milhares de mensagens, que eventualmente fazem com que a conta 
supere a quantidade aceitável de inodes. Para desabilitar o catch all, 
entre no seu cPanel, procure por Mail, clique em “Endereço por 
padrão”, “definir endereço por padrão” e digite: “:fail: E-mail 
inexistente.” 
</p>
<p>Atenção: Quando fizer uso da função “include” do PHP, passe como 
parâmetro a localização do arquivo no sistema de arquivos local ao 
invés de passar uma URL. Ao invés de 
usar include("http://seudominio.com.br/admin/include.php") use 
include("./admin/include.php")</p>

<p>
. É inadmissível hospedar ou enviar qualquer tipo de arquivo de 
phishing em nossos servidores, tanto nos compartilhados quanto nos 
Servidores VPS ou Dedicados. São consideradas práticas de 
phishing os sites, e-mails e mensagens falsas que se passam por 
outras empresas ou instituições bancárias, links fraudulentos que 
redirecionam para páginas falsas ou que têm o objetivo de instalar 
malwares/ransomwares, spear phishing, tentar instalar ‘cavalos de 
troia’ (pharming), promover golpes que utilizem criptomoedas, 
smishing SMS, ataques homográficos e qualquer outro tipo de fraude 
virtual não listada anteriormente. Ao identificar qualquer prática desse 
gênero, a PetroHost se reserva ao direito de remover 
automaticamente a conta de seus servidores e cancelar o plano, sem 
direito ao reembolso.
</p>
        </div>
      </div>
      <div>
        <h1>Utilização de tráfego 
        (bandwidth)</h1>
        <div>
          <p>Cada plano dá direito a utilização de um determinado volume de 
          tráfego mensal (esse volume varia de acordo com o plano contratado).</p>

          <p>A utilização deste limite de tráfego deve ser igualmente distribuída 
dentro do mês. Sua conta deve encerrar o mês sem ultrapassar este 
limite, caso contrário ela será suspensa até que inicie o próximo mês 
ou mais recursos de tráfego sejam adquiridos ou sua conta seja 
migrada para um plano que ofereça mais recursos.</p>
<p>Bandwidth é recurso não-cumulativo: tráfego não utilizado dentro do 
mês não podem ser transferidos para o mês seguinte.</p>
        </div>
      </div>
     </div>
     <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
      <button 
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF', // Cor de fundo do botão
        color: 'white', // Cor do texto do botão
        border: 'none', // Sem borda
        borderRadius: '5px', // Bordas arredondadas
        cursor: 'pointer', // Cursor de ponteiro ao passar o mouse
        fontSize: '16px', // Tamanho da fonte
        fontWeight: 'bold', // Peso da fonte
        transition: 'background-color 0.3s ease' // Transição suave para a cor de fundo ao passar o mouse
      }} 
      onClick={ativeTodoConteudo}
      
      >
       {lerMais?" Ver mais":"Ver menos"}
      </button>
    </div>

    </div>
  );
}

export default TermsServicos;
