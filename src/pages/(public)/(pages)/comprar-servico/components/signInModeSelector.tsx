import usePayStore from "../../../../../contexts/payStore"

export default function SignInModeSelector() {

    const { signInMode ,actions: {
        setSignInMode
    }} = usePayStore()

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-max px-1 py-1 bg-[#0e3f7b1a] rounded-full flex items-center justify-center mt-4 mb-4'>
                <p onClick={() => setSignInMode(1)} style={{ backgroundColor: signInMode === 1 ? "#265085" : "transparent", color: signInMode === 1 ? "#fff" : "#000" }} className='w-max px-4 py-1.5 font-regular text-[0.9rem] cursor-pointer rounded-full'>Particular</p>
                <p onClick={() => { setSignInMode(2) }} style={{ backgroundColor: signInMode === 2 ? "#265085" : "transparent", color: signInMode === 2 ? "#fff" : "#000" }} className='w-max px-4 py-1.5 m-0 font-regular text-[0.9rem] cursor-pointer rounded-full'>Empresa</p>
            </div>
        </div>
    )
}