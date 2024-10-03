import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/(public)/(pages)/home";
import { PagesDominios } from "./pages/(public)/(pages)/dominios";
import { HospedagemDeSite } from "./pages/(public)/(pages)/hospedagem-de-sites";
import HospedagemWordPress from "./pages/(public)/(pages)/hospedagem-wordpress";
import HospedagemWindows from "./pages/(public)/(pages)/hospedagem-windows";
import PaginaDeErro from "./pages/(public)/(pages)/Error";
import App from "./App";
import Contacto from "./pages/(public)/(pages)/contacto";
import GoogleSEOServices from "./pages/(public)/(pages)/google-seo-services";
import RevendaHospedangem from "./pages/(public)/(pages)/revenda-de-hospedagem";
import EmailPagePlano from "./pages/(public)/(pages)/e-email";
import SSL from "./pages/(public)/(pages)/ssl";
import Servidores from "./pages/(public)/(pages)/servidores";
import TermosPetrohost from "./pages/(public)/(pages)/termos-de-servicos/index ";
import Notification from "./pages/(public)/components/modals/notificacao";
import AdminPanel from "./pages/admin/(pages)/(private)/panel";
import ParticularLogin from "./pages/cliente/(pages)/(auth)/particular";
import EnterpriseLogin from "./pages/cliente/(pages)/(auth)/empresa"
import ClientLayout from "./pages/cliente";
import Authentication from "./pages/cliente/(pages)/(auth)/2fa";
import BuyPlan from "./pages/(public)/(pages)/comprar-servico";
import ClientPanel from "./pages/cliente/(pages)/(private)/painel";
import PanelLayout from "./pages/cliente/(pages)/(private)/painel";
import DashboardView from "./pages/cliente/(pages)/(private)/painel/dashboard";
import EmailView from "./pages/cliente/(pages)/(private)/painel/email/inicio";
import ServersView from "./pages/cliente/(pages)/(private)/painel/servidores";
import SSLView from "./pages/cliente/(pages)/(private)/painel/ssl";
import ServicesView from "./pages/cliente/(pages)/(private)/painel/servicos";
import PHAcademy from "./pages/cliente/(pages)/(private)/painel/phAcademy";
import SupportPage from "./pages/cliente/(pages)/(private)/painel/suporte";
import HomeHosting from "./pages/cliente/(pages)/(private)/painel/hospedagem/inicio";
import ManageView from "./pages/cliente/(pages)/(private)/painel/hospedagem/gerir";
import AccountView from "./pages/cliente/(pages)/(private)/painel/account";
import InvoicesView from "./pages/cliente/(pages)/(private)/painel/invoices";
import DomainLayout from "./pages/cliente/(pages)/(private)/painel/dominio";
import HomeDomains from "./pages/cliente/(pages)/(private)/painel/dominio/inicio";
import DomainManageView from "./pages/cliente/(pages)/(private)/painel/dominio/gerir";
import BetaPage from "./pages/(public)/(pages)/beta";
import EmailBeta from "./pages/cliente/(pages)/(private)/painel/emailBeta";
import LoginAdmin from "./pages/admin/(pages)/(auth)/login";
import AdminLayout from "./pages/admin";
import DashboardAdminView from "./pages/admin/(pages)/(private)/panel/dashboard";
import AccountAdminView from "./pages/admin/(pages)/(private)/panel/account";
import RequestsView from "./pages/admin/(pages)/(private)/panel/requests";
import DetailsView from "./pages/admin/(pages)/(private)/panel/clients/details";
import ListView from "./pages/admin/(pages)/(private)/panel/clients/list";
import ClientsLayout from "./pages/admin/(pages)/(private)/panel/clients";
import BuyPage from "./pages/(public)/(pages)/carrinho";
import EmailLayout from "./pages/cliente/(pages)/(private)/painel/email";
import EmailManageView from "./pages/cliente/(pages)/(private)/painel/email/gerir";
import EmailConfirm from "./pages/cliente/(pages)/(auth)/emailConfirmation";
import RecoverCredentials from "./pages/cliente/(pages)/(auth)/recover-password";
import ResetPassword from "./pages/cliente/(pages)/(auth)/reset-password";
import Expired from "./pages/(public)/(pages)/expired";
import PaginaEmailOffice365 from "./pages/(public)/(pages)/email-office-365";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PaginaDeErro />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "dominios",
                element: <PagesDominios />,
            },
            {
                path: "beta",
                element: <BetaPage />,
            },
            {
                path: "hospedagem-de-sites",
                element: <HospedagemDeSite />
            },
            {
                path: "hospedagem-windows",
                element: <HospedagemWindows />
            },
            {
                path: "hospedagem-wordpress",
                element: <HospedagemWordPress />
            },
            {
                path: "contactos",
                element: <Contacto />
            },
            {
                path: "termos-de-servicos",
                element: <div>termos de servicos</div>
            },
            {
                path: "revenda-de-hospedagem",
                element: <RevendaHospedangem />
            },
            {
                path: "servidores",
                element: <Servidores />
            },
            {
                path: "google-seo-services",
                element: <GoogleSEOServices />
            },
            {
                path: "Email-profissional",
                element: <EmailPagePlano />
            },
            {
                path:"Email-Office-365",
                element:<PaginaEmailOffice365/>
            },
            {
                path: "ssl",
                element: <SSL />
            },
            {
                path: "contratos-e-políticas",
                element: <TermosPetrohost />
            },
            {
                path: "alerta",
                element: <Notification />
            },
            {
                path: "alerta",
                element: <Notification />
            },
            {
                path: "alojamento-web/:id",
                element: <BuyPlan />
            },
            {
                path: "carrinho",
                element: <BuyPage />
            },
            {
                path: "expired",
                element: <Expired />
            }
        ]
    },
    {
        path: "/cliente",
        element: <ClientLayout />,
        errorElement: <PaginaDeErro />,
        children: [
            {
                path: "particular",
                element: <ParticularLogin />
            },
            {
                path: "empresa",
                element: <EnterpriseLogin />
            },
            {
                path: "autenticacao",
                element: <Authentication />
            },
            {
                path: "painel",
                element: <ClientPanel />
            },
            {
                path: "recuperacao",
                element: <RecoverCredentials />
            },
            {
                path: "confirmacao",
                element: <EmailConfirm />
            },
            {
                path: "redefinir-senha/:token",
                element: <ResetPassword />
            },
        ]
    }
    ,
    {
        path: "/cliente/painel",
        element: <PanelLayout />,
        errorElement: <PaginaDeErro />,
        children: [
            {
                path: "dashboard",
                element: <DashboardView />
            },
            {
                path: "dominios",
                element: <DomainLayout />,
                children: [
                    {
                        path: "servicos",
                        element: <HomeDomains />
                    },
                    {
                        path: "gerir/:id",
                        element: <DomainManageView />
                    },
                ]
            },
            {
                path: "hospedagem",
                children: [
                    {
                        path: "servicos",
                        element: <HomeHosting />
                    },
                    {
                        path: "gerir/:id",
                        element: <ManageView />
                    },
                ]
            },
            {
                path: "email",
                element: <EmailLayout />,
                children: [
                    {
                        path: "servicos",
                        element: <EmailView />
                    },
                    {
                        path: "gerir/:id",
                        element: <EmailManageView />
                    },
                ]
            },
            {
                path: "email-beta",
                element: <EmailBeta />
            },
            {
                path: "servidores",
                element: <ServersView />
            },
            {
                path: "ssl",
                element: <SSLView />
            },
            {
                path: "servicos",
                element: <ServicesView />
            },
            {
                path: "ph-academy",
                element: <PHAcademy />
            },
            {
                path: "suporte",
                element: <SupportPage />
            },
            {
                path: "conta",
                element: <AccountView />
            },
            {
                path: "faturas",
                element: <InvoicesView />
            },
        ]
    },

    {
        path: "/security",
        element: <AdminLayout />,
        errorElement: <PaginaDeErro />,
        children: [
            {
                path: "login",
                element: <LoginAdmin />
            },
            {
                path: "admin",
                element: <AdminPanel />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardAdminView />
                    },
                    {
                        path: "account",
                        element: <AccountAdminView />
                    },
                    {
                        path: "clients",
                        element: <ClientsLayout />,
                        children: [
                            {
                                path: "list",
                                element: <ListView />
                            },
                            {
                                path: "details/:id",
                                element: <DetailsView />
                            },
                        ]
                    },
                    {
                        path: "requests",
                        element: <RequestsView />
                    },
                ]
            },
        ]
    }
]);


export default router
