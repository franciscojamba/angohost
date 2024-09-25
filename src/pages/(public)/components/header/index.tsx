import "./style-header.css"
import { LOGOAZUL } from "../../../../utils/logos"
import { useEffect,  } from "react"
import usePayStore from "../../../../contexts/payStore"
import useUtils from "../../../../utils/useutils"
import { NavMenu } from "../navbar-top"
import { HomeNavBarTop } from "../navbar/homeNavBarTop"

export const Header = () => {
    
    const { domainExtensions, actions: {
        getDomainExtensions
    } } = usePayStore()

    const { formatMoneyWithoutKz } = useUtils()

    useEffect(() => {
        getDomainExtensions()
    }, [])

    return (
        <>
            <header onClick={(e) => e.stopPropagation()} >
                <HomeNavBarTop logo={LOGOAZUL} color={"#0e3f7b"} />
                <div className="rounded-lg">
                    <NavMenu />
                    <div className="search-bar mt-1 " style={{ background: 'linear-gradient(90deg, #450153 12%, #3e00b0 90%)' }}>
                        {/* <form className="form-input-seach">
                            <p className="label-input-search">Pesquise o nome de domínio perfeito para si!</p>
                            <input className="input-domino-verificar" value={site} onChange={(e) => setSite(e.target.value)} type="text" placeholder="nomedasuaempresa.ao" />
                            <a style={{ textDecoration: "none" }} href={''}>Verificar domínio</a>
                        </form> */}
                        <div className="prices">
                            {domainExtensions && domainExtensions.slice(0, 5).map((domain, _index) => (
                                <div key={_index} className="price">
                                    <h2>{domain.tipo}</h2>
                                    <p style={{fontWeight: '400', fontFamily: 'Rubik'}} className="font-[Rubik] font-light">{formatMoneyWithoutKz(domain.preco)}/ano</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}