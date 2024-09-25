export default function FormEmpresa() {
    return (
        <div className='w-full h-max mt-[50px] pb-[50px]'>
            <div className='w-full h-max'>
                <div className='flex gap-4 flex-col w-full items-center justify-center'>
                    <form>
                        <div className='flex gap-3'>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Nome da Empresa*</label>
                                <input type="text" maxLength={14} placeholder='Insira o nome da sua empresa' className='w-[817px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                        </div>
                        <div className='flex gap-3 mt-[20px]'>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Email*</label>
                                <input type="text" placeholder='Insira o seu email' className='w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                               
                            </div>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Telefone*</label>
                                <input type="text"  placeholder='Insira o número de telefone' className='w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                        </div>
                        <div className='flex gap-3 mt-[20px]'>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>País*</label>
                                <input type="text" disabled className='w-[400px] border-[#ddd] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>Província*</label>
                                <input type="text" disabled className='w-[400px] border-[#ddd] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                            </div>
                        </div>
                        <div className='flex flex-col w-max h-max mt-4'>
                            <label htmlFor="" className='font-semibold text-[0.9rem]'>Endereço*</label>
                            <input type="text" placeholder='Município, Bairro, Rua, Casa' className='w-[817px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />

                        </div>
                        <div className='flex gap-3 mt-[20px]'>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Senha*</label>
                                <input type="password" placeholder='Crie uma senha' maxLength={14} className='w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                
                            </div>
                            <div className='flex flex-col w-max h-max'>
                                <label htmlFor="" className='font-semibold text-[0.9rem]'>Confirme a senha*</label>
                                <input type="pasSword" placeholder='Repita a senha' maxLength={14} className='w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}