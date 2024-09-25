import useClientStore from "../../../../../contexts/clientStore"

export default function AutoFillClientForm() {

    const { client } = useClientStore()

    return (
        <div className='w-full h-max mt-[50px] pb-[50px]'>
            <div className='w-full h-max'>
                <div className='flex gap-4 flex-col w-full items-center justify-center'>
                    <form className=" w-full lg:w-max">
                        <div className='flex flex-col  w-full lg:w-max lg:flex-row gap-3'>
                            <div className='flex flex-col w-full lg:w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>Nome</label>
                                <input type="text" value={client?.nome} disabled className='w-full lg:w-[600px] border-[#ddd] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />                                            </div>
                            <div className='flex flex-col w-full lg:w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>NIF</label>
                                <input type="text" value={client?.nif.toUpperCase()} disabled className='w-full lg:w-[200px] h-[49px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3 mt-[20px]'>
                            <div className='flex flex-col w-full lg:w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Email*</label>
                                <input type="email" value={client?.email} disabled placeholder='Insira o seu email' className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                            <div className='flex flex-col w-full lg:w-max h-max'>
                                <label className='font-semibold text-[0.9rem]'>Telefone*</label>
                                <input type="number" value={client?.telefone} disabled placeholder='Insira o número de telefone' className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full lg:w-max h-max mt-4'>
                            <label htmlFor="" className='font-semibold text-[0.9rem]'>Endereço*</label>
                            <input type="text" value={`${client?.endereco.endereco} - ${client?.endereco.provincia} - ${client?.endereco.pais}`} disabled placeholder='Município, Bairro, Rua, Casa' className='w-full lg:w-[817px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}