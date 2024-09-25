
import usePanel from "@/pages/admin/hooks/usePanel";
import { Helmet } from "react-helmet";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import NavBar from "@/pages/admin/components/panel/navbar/view";

export default function AdminPanel() {

    const { loading } = usePanel()

    if (loading) {
        return <div className="w-full h-full flex items-center justify-center">ANGOHOST</div>
    }

    return (
        // <div className="w-screen h-full flex justify-between bg-semi-secondary p-0 md:p-2">
        //         <div className="w-screen h-full flex justify-between p-1  items-start gap-3">
        //             <SidebarAdmin />
        //             <div className="w-full flex items-center">
        //                 <Header />
        //                 {/* <Outlet /> */}
        //             </div>
        //         </div>
        // </div>

        <>
            <Helmet><title>Painel do Administrador</title></Helmet>
            <Toaster richColors position="top-right"/>
            <div className='w-full h-[100vh] flex items-end justify-center bg-[#F1F4FA] text-black'>
                <NavBar />
                <div className='h-full bg-[#F1F4FA] pt-3 pr-3 pb-3' style={{ flex: 1 }}>
                    <div className='bg-[#ffffff] rounded-[30px] w-full h-full px-4 py-1 flex flex-col font-[Rubik]' style={{ flex: 1}}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
