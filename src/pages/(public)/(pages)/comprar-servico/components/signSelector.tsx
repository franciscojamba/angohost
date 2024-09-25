import usePayStore from "../../../../../contexts/payStore"

export default function SignSelector() {

    const { signMode, actions: {
        setFormStep,
        setIsBILoaded,
        setIsNIFLoaded,
        setSignMode
    } } = usePayStore()

    return (
        <div className='w-full flex mt-6 items-center justify-center' >
            <div className='w-max px-1 py-1 bg-[#0e3f7b1a] rounded-full flex items-center justify-center mt-[30px]'>
                <p onClick={() => setSignMode(1)} style={{ backgroundColor: signMode === 1 ? "#265085" : "transparent", color: signMode === 1 ? "#fff" : "#000" }} className='w-max px-4 py-2 font-regular text-[0.8rem] cursor-pointer rounded-full'>Criar conta</p>
                <p onClick={() => {
                    setIsBILoaded(false)
                    setIsNIFLoaded(false)
                    setSignMode(2)
                    setFormStep(3)
                }} style={{ backgroundColor: signMode === 2 ? "#265085" : "transparent", color: signMode === 2 ? "#fff" : "#000" }} className='w-max px-4 py-2 m-0 font-regular text-[0.8rem] cursor-pointer rounded-full'>Já tenho uma conta</p>
            </div>
        </div >
    )
}