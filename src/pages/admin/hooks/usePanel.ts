import { useState, useEffect } from "react";
import useUtils from "@/utils/useutils";
import { useNavigate } from "react-router-dom";

export default function usePanel() {
    
    const [loading, setLoading] = useState(true);
    const { isAdminAuthenticated } = useUtils()
    const router = useNavigate()

    useEffect(() => {
        setLoading(true)
        if (!isAdminAuthenticated()) {
            router('/security/login')
        }
        else {
            setLoading(false)
        }
    }, [router])

    return { loading }
}