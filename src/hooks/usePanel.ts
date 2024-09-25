import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUtils from "../utils/useutils";
import useAuth from "./useAuth";

export default function usePanel() {
    const nav = useNavigate()
    const { isAuthenticated } = useUtils()
    const [loading, setLoading] = useState(true);

    const { signOut } = useAuth()

    useEffect(() => {
        setLoading(true)
        if (!isAuthenticated()) {
            signOut()
            nav("/cliente/particular");
        } else {
            setLoading(false);
        }
    }, [nav]);


    return { loading }
}