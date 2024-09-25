import "./navbar.css"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { GoPeople } from "react-icons/go";
import { CiUser } from "react-icons/ci"
import { Link } from "react-router-dom"
import { ModalClient } from "../modals/modal-client";
import { useState, useEffect } from "react";
import menuData from "./menuData";
import { useNavigate } from 'react-router-dom'
import useHeaderModal from "../../../../hooks/useHeaderModal";
import { ModalLogado } from "../modals/modal-logado";
import useUtils from "../../../../utils/useutils";

interface propsNavBarTopColor {
    color: string
    logo: string
}

export const NavBarTop = ({ color, logo }: propsNavBarTopColor) => {

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const { produto, setProduto, modalRefs } = useHeaderModal()
    const router = useNavigate()
    const { isAuthenticated } = useUtils()

    useEffect(() => {
        document.addEventListener("click", () => {
            setIsModalOpened(false)
        })

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

    useEffect(() => {
        const handleClickOutside = () => {
            setIsModalOpened(false)
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleOpenMenu() {
        if (isMenuOpened) {
            setIsMenuOpened(false)
        }
        else {
            setIsMenuOpened(true)
        }
    }

    function handleClick() {
        if (isModalOpened) {
            setIsModalOpened(false)
        }
        else {
            setIsModalOpened(true)
        }
    }

    return (
        <div className="navbar-top">
            <Link to={"/"} >
                <img width="150" height="auto"
                    src={logo} />
            </Link>
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
                <div className="nav-icons-top-rigth">
                    <GoPeople size={20} color={color} />
                    <a href="/contactos" style={{ color: `${color}`, textDecoration: "none" }}>Central de venda</a>
                </div>
                <div className="nav-icons-top-rigth">
                    <IoIosHelpCircleOutline size={24} color={color} />
                    <a href="https://ajuda.petrohost.ao" style={{ color: `${color}`, textDecoration: "none" }}>Ajuda</a>
                </div>
                <div id="btn-on" className="nav-icons-top-rigth .btn-on" onClick={handleClick}>
                    <CiUser size={21} color={color} />
                    <a data-opened="false"  ref={el => {
                        if (isAuthenticated()) {
                            modalRefs.current[10] = el
                        }else {
                            modalRefs.current[9] = el
                        }
                    }} onClick={()=>setProduto(isAuthenticated() ? 10 : 9)} onDoubleClick={()=>setProduto(0)} style={{ color: `${color}`, textDecoration: "none", margin: 0, cursor: 'pointer' }}>{isAuthenticated() ? "Minha conta" : "Entrar"}</a>
                </div>
                {
                    produto === 9 && <ModalClient />
                }
                {
                    produto === 10 && <ModalLogado />
                }

            </div>

        </div>
    )
}