import usePayStore from "../../../../../contexts/payStore"

export default function RegisterNewDomainToogler() {

    const { registerNewDomain, actions: {
        setRegisterNewDomain
    } } = usePayStore()

    return (
        <div className='w-full flex mt-6 items-center justify-center'>
            <div className='w-max px-1 py-1 bg-[#0e3f7b1a] rounded-full flex items-center justify-center mt-[30px]'>
                <p onClick={() => setRegisterNewDomain(true)} style={{ backgroundColor: registerNewDomain ? "#265085" : "transparent", color: registerNewDomain ? "#fff" : "#000" }} className='w-max px-4 py-2 font-regular text-[0.8rem] cursor-pointer rounded-full'>Registar novo domínio</p>
                <p onClick={() => setRegisterNewDomain(false)} style={{ backgroundColor: !registerNewDomain ? "#265085" : "transparent", color: !registerNewDomain ? "#fff" : "#000" }} className='w-max px-4 py-2 m-0 font-regular text-[0.8rem] cursor-pointer rounded-full'>Usar domínio existente</p>
            </div>
        </div>
    )
}