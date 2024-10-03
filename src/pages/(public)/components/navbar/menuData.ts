interface Link {
    label: string;
    href: string;
}

interface MenuItem {
    title: string;
    links: Link[];
}

const menuData:MenuItem[] = [
    {
        title: 'Dominio',
        links: [
            {
                label: 'Registo de dominio',
                href: '/dominios'
            },
            {
                label: 'Transferencia de dominio',
                href: '/dominios'
            },
        ],
        
    },
    {
        title: 'VPS',
        links: [
            {
                label: 'VPS',
                href: '/servidores'
            },
            {
                label: 'VPS Linux',
                href: '/'
            },
            {
                label: 'VPS Windows',
                href: '/'
            }
        ],
        
    },
    {
        title: 'Hospedagem',
        links: [
            {
                label: 'Hospedagem Linux',
                href: '/hospedagem-de-sites'
            },
            {
                label: 'Hospedagem WordPress',
                href: '/hospedagem-wordpress'
            },
            {
                label: 'Hospedagem Windows',
                href: '/hospedagem-windows'
            }
        ],
        
    },
    {
        title: 'Revenda de hospedagem',
        links: [
            {
                label: 'Revenda Linux',
                href: '/revenda-de-hospedagem'
            },
            {
                label: 'Revenda Windows',
                href: '/revenda-de-hospedagem'
            }
        ],
        
    },
    {
        title: 'SSL',
        links: [
            {
                label: 'Certificados SSL',
                href: '/ssl'
            },
        ],
        
    },
    {
        title: 'Email',
        links: [
            {
                label: 'eMail',
                href: '/Email-profissional'
            },
            {
                label: 'Google Workspace',
                href: '/email-office-365'
            },
        ],
        
    },
    {
        title: 'Contactos',
        links: [
            {
                label: 'Suporte 24/7',
                href: '/contactos'
            },
            {
                label: 'WhatsApp',
                href: 'https://wa.me/+244923000143'
            },
        ],
        
    },
    {
        title: 'Entrar',
        links: [
            {
                label: 'Particular',
                href: '/'
            },
            {
                label: 'Empresa',
                href: '/'
            },
        ],
        
    }
]

export default (menuData)