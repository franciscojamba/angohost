import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import dominio from "@/assets/svgs/dominio.svg"
import transferencia_dominio from "@/assets/svgs/transferencia.svg"

const components: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "VPS",
        href: "/servidores",
        url: 'https://www.squarebrothers.com/images/icon/vps-hosting.svg',
        description:
            "Tecnologia Virtulizor dedicada sem compartilhamento de recursos em escala.",
    },
    {
        title: "VPS Linux",
        href: "/servidores",
        url: 'https://www.squarebrothers.com/images/icon/linux-vps-hosting.svg',
        description:
            "Tecnologia Virtulizor dedicada, ideal para grandes sites e aplicativos.",
    },
    {
        title: "VPS Windows",
        href: "/servidores",
        url: 'https://www.squarebrothers.com/images/icon/windows-vps-hosting.svg',
        description:
            "Tecnologia Virtulizor dedicada Windows VPS.",
    },
]

const hostingData: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "Hospedagem Linux",
        href: "/hospedagem-de-sites",
        url: 'https://www.squarebrothers.com/images/icon/linux-hosting.svg',
        description:
            "Excelente escolha para sites baseados em PHP e MySQL.",
    },
    {
        title: "Hospedagem Wordpress",
        href: "/hospedagem-wordpress",
        url: 'https://www.squarebrothers.com/images/icon/wordpress-hosting.svg',
        description:
            "Aperfeiçoado e ajustado para o software de blog número 1 do mundo.",
    },
    {
        title: "Hospedagem Windows",
        href: "/hospedagem-windows",
        url: 'https://www.squarebrothers.com/images/icon/windows-hosting.svg',
        description:
            "Uma escolha popular para desenvolvedores ASP e ASP.NET",
    },
]

const revendaData: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "Revenda de hospedagem Linux",
        href: "/revenda-de-hospedagem",
        url: 'https://www.squarebrothers.com/images/icon/linux-hosting.svg',
        description:
            "Comece hoje mesmo seu negócio de hospedagem com tecnologia PhPanel",
    },
    {
        title: "Revenda Windows",
        href: "/revenda-de-hospedagem",
        url: 'https://www.squarebrothers.com/images/icon/windows-hosting.svg',
        description:
            "Comece seu negócio de hospedagem com Plesk hoje",
    }
]

const sslData: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "Certificados SSL",
        href: "/ssl",
        url: 'https://www.squarebrothers.com/images/icon/ssl-certificate.svg',
        description:
            "SSL DV com melhor preço para seus sites.",
    }
]

const emailData: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "Email Profissional",
        href: "/Email-profissional",
        url: 'https://www.squarebrothers.com/images/icon/email-hosting.svg',
        description:
            "Melhor hospedagem de e-mail empresarial acessível.",
    },
    {
        title: "Microsoft 365",
        href: "/email-office-365",
        url: 'https://www.squarebrothers.com/images/icon/google-workspace.svg',
        description:
            "Colabore mais facilmente com e-mail, Drive, Documentos e muito mais.",
    }
]

const contactData: { title: string; href: string; description: string, url: string }[] = [
    {
        title: "Suporte 24/7",
        href: "/contactos",
        url: 'https://www.squarebrothers.com/images/icon/live-chat.svg',
        description:
            "Nossos representantes ao vivo estão disponíveis no chat 24/7",
    },
    {
        title: "Whatsapp",
        href: "https://wa.me/+244942090108",
        url: 'https://www.squarebrothers.com/images/icon/whatsapp.svg',
        description:
            "Converse conosco no WhatsApp",
    }
]

export function NavMenu() {
    return (
        <div className="bg-red-100 py-2  " style={{ background: 'linear-gradient(-90deg, rgb(43 6 67 / 85%), rgb(120 3 121), rgb(2, 18, 31))' }}>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">Domínio</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem className="flex flex-col items-center justify-center" href="/dominios" title="Registro de domínio">
                                    <div className="w-full flex items-center justify-center">
                                        <img width={40} src={dominio} alt="" />
                                    </div>
                                    <p>Entregamos-te liberdade de poder registrar +750 TLDS</p>
                                </ListItem>
                                <ListItem className="flex flex-col items-center justify-center" href="/dominios" title="Transferencia de domínio">
                                    <div className="w-full flex items-center justify-center">
                                        <img width={40} src={transferencia_dominio} alt="" />
                                    </div>
                                    Transfira seus domínios existentes para nós e economize dinheiro!
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">VPS</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        href={component.href}
                                    >
                                        <p className="text-[#222] font-semibold">{component.title}</p>
                                        <div className="flex items-center justify-start gap-2">
                                        <img className="w-[50px]" src={component.url} alt="" />

                                            <p>{component.description}</p>
                                        </div>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">Hospedagem</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {hostingData.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <p className="text-[#222] font-semibold">{component.title}</p>
                                    <div className="flex items-center justify-start gap-2">
                                    <img className="w-[50px]" src={component.url} alt="" />

                                        <p>{component.description}</p>
                                    </div>
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">Revenda</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {revendaData.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <p className="text-[#222] font-semibold">{component.title}</p>
                                    <div className="flex items-center justify-start gap-2">
                                    <img className="w-[50px]" src={component.url} alt="" />

                                        <p>{component.description}</p>
                                    </div>
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">SSL</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {sslData.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <p className="text-[#222] font-semibold">{component.title}</p>
                                    <div className="flex items-center justify-start gap-2">
                                    <img className="w-[50px]" src={component.url} alt="" />

                                        <p>{component.description}</p>
                                    </div>
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">E-Mail</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {emailData.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <p className="text-[#222] font-semibold">{component.title}</p>
                                    <div className="flex items-center justify-start gap-2">
                                    <img className="w-[50px]" src={component.url} alt="" />

                                        <p>{component.description}</p>
                                    </div>
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white hover:text-white hover:bg-transparent bg-transparent">Contactos</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {contactData.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <p className="text-[#222] font-semibold">{component.title}</p>
                                    <div className="flex items-center justify-start gap-2">
                                    <img className="w-[50px]" src={component.url} alt="" />

                                        <p>{component.description}</p>
                                    </div>
                                </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"