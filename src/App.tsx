import { Outlet } from 'react-router-dom'

import "./styles/styles.css"
import "../app/globals.css"
import { Toaster } from "sonner"

function App() {

    return (
        <>
            <Outlet />
            <Toaster richColors position='top-right'/> 
        </>
    )
}

export default App