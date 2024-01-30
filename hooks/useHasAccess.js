import apiClient from "@/utils/api";
import { useEffect, useState } from "react";

export const useHasAccess = () => {
    const [hasAccess, setHasAccess] = useState(false)
    useEffect(() => {
        apiClient.get("/user")
        .then(u=>{
            setHasAccess(u.hasAccess)
        })
    }, [])
    return hasAccess
}