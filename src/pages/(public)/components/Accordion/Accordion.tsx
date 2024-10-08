import { Accordion, Stack } from 'rsuite';
import envelop from "../../../../assets/images/envelope.png"
import internet_icon from "../../../../assets/images/internet.png"
import wordpress_icon from "../../../../assets/images/wordpress.png"
import dns_icon from "../../../../assets/images/dns.png"
import host_icon from "../../../../assets/images/cloud.png"


const Header = (props: { [x: string]: any; avatarUrl: any; title: any; subtitle: any; }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { avatarUrl, title, subtitle, ...rest } = props;
    return (
        <Stack {...rest} spacing={10} alignItems="flex-start">
            {/* <Avatar  style={{background:"transparent"}}   className='avatar-accordion'  src={avatarUrl} alt={title} /> */}
            <Stack spacing={2} direction="column" alignItems="flex-start">
                <div style={{ color: "#121212" }}  >{title}</div>
                <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
            </Stack>
        </Stack>
    );
};

export const AccordionPetrohost = () => (
    <Accordion className='Accordion'  >
        <Accordion.Panel
            header={
                <Header

                    avatarUrl={host_icon}
                    title="É fácil hospedar sites na Angohost?"
                    subtitle=""

                />
            }
            eventKey={1}
        >
            <p>

                Sim, as soluções de hospedagem de site da Angohost são intuitivas e fáceis de usar, mesmo para quem está começando agora na internet. Nosso propósito é oferecer a melhor experiência e ajudar nossos clientes a ter sucesso na internet.
                Para os momentos de dúvida você pode contar com o nosso suporte 24h via chat e e-mail. Você também conta com diversos outros canais de ajuda, como.
            </p>
            <ul>
                <p>Para os momentos de dúvida você pode contar com o nosso suporte 24h via chat e e-mail. Você também conta com diversos outros canais de ajuda, como:</p>
                <li>
                    Base de conhecimento completa, com tudo que você precisa saber sobre nossos produtos e serviços
                </li>
                <li>
                    Angohost Academy, a plataforma de cursos da Angohost que oferece cursos gratuitos e pagos para te ajudar a ter sucesso
                </li>
                <li>
                    Blog da Angohost, com temas diversos sobre hospedagem, criação de sites e também sobre marketing digital
                </li>
            </ul>

        </Accordion.Panel>

        <Accordion.Panel
            header={
                <Header
                    avatarUrl={dns_icon}
                    title="Por que comprar domínio com a Angohost?"
                    subtitle=""
                />
            }
            eventKey={2}
        >
            <p>
                A Angohost atua como empresa autorizada pelas entidades de registro nacional (Registro.ao) e internacional (ICANN). Isso permite que o domínio escolhido seja registrado diretamente com a entidade de registro.

            </p>
            <ul>
                <p>
                    Ao comprar seu nome de domínio com a Angohost você tem acesso a uma série de benefícios como:

                </p>

                <li>
                    • Painel simples de usar, que permite que você acompanhe o status do seu domínio, gerencie DNS e vincule um novo domínio ao seu plano com facilidade

                </li>
                <li>
                    • Suporte premiado e em português, disponível sempre que você precisar
                </li>
                <li>
                    • Descontos progressivos no preço do domínio, de acordo com a duração do registro
                </li>
                <li>
                    • Proteção de privacidade para domínios internacionais, que você pode ativar no checkout ou no portal
                </li>
            </ul>

        </Accordion.Panel>

        <Accordion.Panel
            header={
                <Header
                    avatarUrl={envelop}
                    title="Quais os benefícios de ter um e-mail profissional?"
                    subtitle=""
                />
            }
            eventKey={3}
        >
            Existem muitos motivos para você trocar um e-mail gratuito por um e-mail profissional (@suaempresa) ligado ao seu nome de domínio. Entre os principais motivos, destaque para:

            Credibilidade: com um e-mail @suaempresa os clientes terão mais confiança para entrar em contato com você e contratar seus serviços

            Divulgação: cada mensagem que você envia com um e-mail que leva o nome da sua empresa é uma oportunidade de divulgar seu negócio, promovendo seu negócio de forma eficaz

            Segurança: um e-mail profissional reconhecido no mercado tem os requisitos que você busca em termos de segurança, com filtros anti spam e proteção antivírus avançadas
        </Accordion.Panel>

        <Accordion.Panel
            header={
                <Header
                    avatarUrl={internet_icon}
                    title="Posso criar um site rápido com o construtor de sites da Angohost?"
                    subtitle=""
                />
            }
            eventKey={4}
        >
            Sim, o construtor de sites da Angohost é uma das formas mais rápidas e fáceis de colocar um site no ar. Com recursos que permitem personalizar totalmente um site, o construtor é perfeito para para diversos tipos de negócios.


            Basta selecionar sua categoria de negócio, escolher o modelo de site que mais se adequa ao seu projeto e começar a personalizar: você pode escolher cores, fontes, imagens, textos e muito mais.


            Independente do tamanho ou do segmento da sua empresa, com o construtor de sites você poderá criar sites completos, com páginas diversas e até receber pagamentos online no seu site, se quiser.
        </Accordion.Panel>


        <Accordion.Panel
            header={
                <Header
                    avatarUrl={wordpress_icon}
                    title="Posso utilizar o WordPress para criar meu site?"
                    subtitle=""
                />
            }
            eventKey={5}
        >
            Prefere criar seu site em WordPress? Excelente também. Saiba que este é um dos CMSs mais utilizados no mundo, e também pelos clientes da Angohost.


            A Angohost oferece uma instalação automatizada do WordPress, o que permite que você complete esta primeira etapa em minutos. Depois é só aproveitar tudo que este CMS super completo oferece.


            Praticamente todos os planos de hospedagem oferecidos pela Angohost permitem e facilitam a instalação do WordPress via cPanel. Confira este e outros benefícios da hospedagem WordPress.
        </Accordion.Panel>
    </Accordion>
);

