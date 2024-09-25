import services from '../../../../../../assets/svgs/servers.svg'

export default function ServersView() {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-2">
            <img src={services} className='w-[300px]' />
            <h1 className='text-[1.4rem] font-semibold text-cyan-900 mt-4 mb-2' style={{ lineHeight: '10px' }}>Servidores</h1>
            <p className='text-[0.9rem] opacity-40'>Brevemente os seus servicos estarao aqui</p>
        </div>
    )
}
