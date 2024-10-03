import "./navbar.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import menuData from "./menuData";
import { useNavigate } from 'react-router-dom'
import PublicAccountDropdown from "../../(pages)/home/components/publicAccountDropDown";
import pt from '@/assets/images/countries/PO-flag.webp'
import mz from '@/assets/images/countries/MZ-flag.webp'
import br from '@/assets/images/countries/BR-flag.webp'
import ao from '@/assets/images/countries/AO-flag.webp'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import usePayHosting from "@/hooks/usePayHosting";

interface propsNavBarTopColor {
    color: string
    logo: string
}

const countryInfo = [
    {
        name: 'Angola',
        flag: ao,
        link: 'https://angohost.ao'
    },
    {
        name: 'Brazil',
        flag: br,
        link: 'https://angohost.com.br'
    },
    {
        name: 'Portugal',
        flag: pt,
        link: 'https://angohost.pt'
    },
    {
        name: 'Mozambique',
        flag: mz,
        link: 'https://angohost.co.mz'
    }
];

export const HomeNavBarTop = ({ logo, color }: propsNavBarTopColor) => {

    const getFlag = (pais: string) => {
        switch (pais) {
            case 'Portugal':
                return pt;
            case 'Mozambique':
                return mz;
            case 'Brazil':
                return br;
            case 'Angola':
            default:
                return ao;
        }
    };

    const paises = [
        {
            name: 'Angola',
            flag: ao,
            link: 'https://angohost.ao'
        },
        {
            name: 'Brazil',
            flag: br,
            link: 'https://angohost.com.br'
        },
        {
            name: 'Portugal',
            flag: pt,
            link: 'https://angohost.pt'
        },
        {
            name: 'Mozambique',
            flag: mz,
            link: 'https://angohost.co.mz'
        }
    ]
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const router = useNavigate()
    const { location } = usePayHosting()

    useEffect(() => {
        const menu = document.querySelector('.mobile_menu') as HTMLElement
        const screenWidth = window.document.body.clientWidth
        if (screenWidth <= 450) {
            menu.classList.remove('tablet')
        }
        else {
            menu.classList.add('tablet')
        }

        const itemList = document.querySelectorAll('.item') as NodeListOf<HTMLDivElement>

        itemList.forEach((item) => {
            const toggler = item.querySelector('.menu_toggler') as HTMLButtonElement
            const subItemsContainer = item.querySelector('.subItemsContainer') as HTMLDivElement
            toggler.addEventListener('click', () => {
                console.log('click')
                item.style.transition = '.3s'
                subItemsContainer.style.transition = '.3s'
                if (item.dataset.active === "false") {
                    subItemsContainer.style.height = 'max-content'
                    item.dataset.active = "true"
                }
                else {
                    subItemsContainer.style.height = '0px'
                    item.dataset.active = "false"
                }
            })
        })

    }, [])

    function handleOpenMenu() {
        if (isMenuOpened) {
            setIsMenuOpened(false)
        }
        else {
            setIsMenuOpened(true)
        }
    }

    const currentCountry = location.pais || 'Angola';
    const orderedCountries = [
        { name: currentCountry, ...countryInfo.find(country => country.name === currentCountry) },
        ...countryInfo.filter(country => country.name !== currentCountry)
    ];

    return (
        <div className="navbar-top  ">
            <div className="flex items-center justify-center gap-2">
                <Link to={"/"} >
                    <img width="150" height="auto"
                        src={logo} />
                </Link>
                <NavigationMenu className="z-50 mt-2.5">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger><img className="w-[35px] rounded-[5px] mr-2 text" style={{color: color}} src={getFlag(location.pais)} alt="" />{paises.find(pais => pais.name === location.pais) ? location.pais : "Angola"}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg flex items-center justify-start gap-2 font-semibold">
                                                    <img className="w-[40px] rounded-[5px]" src={orderedCountries[0].flag} alt="" /> {orderedCountries[0].name}
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Hospedagem de sites com especialistas angolanos.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {orderedCountries.slice(1).map(country => (
                                        <li key={country.name}>
                                            <Link to={country.link as string} title={country.name} className="flex items-center justify-start gap-2 font-[500]">
                                                <img className="w-[40px] rounded-[5px]" src={country.flag} alt={country.name} /> {country.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <button className="hamburger" onClick={handleOpenMenu}>
                <span data-active={isMenuOpened} />
                <span data-active={isMenuOpened} />
                <span data-active={isMenuOpened} />
            </button>
            <div className="mobile_menu pt-[12px] px-3 flex flex-col gap-2" data-opened={isMenuOpened}>
                <Link to={"/"} className="mb-[30px]">
                    <img className="w-[160px] h-[40px]" //
                        src={logo} />
                </Link>
                {menuData && menuData.map((item) => (
                    <div data-active="false" className="item py-2 bg-gray-100 px-3 rounded-md">
                        <button className="menu_toggler flex justify-between w-full">
                            {item.title}
                        </button>
                        <div className="subItemsContainer h-0 overflow-hidden flex flex-col gap-2 ">
                            {item.links && item.links.map((link) => (
                                <Link to={link.href} onClick={(e) => {
                                    e.preventDefault()
                                    setIsMenuOpened(false)
                                    if (link.href !== "https://wa.me/+244923000143") {
                                        router(link.href)
                                    }
                                    else {
                                        const link = document.createElement('a')
                                        link.href = 'https://wa.me/+244923000143'
                                        link.click()
                                    }

                                }} className="w-full text-[0.8rem] bg-white rounded-md px-4 py-2">{link.label}</Link>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
            <div className="navbar-top-rigth">
                <PublicAccountDropdown color={color} />
            </div>
        </div>
    )
}