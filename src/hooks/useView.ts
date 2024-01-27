import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useViews = () => {
    const [views, setViews] = useState<any[]>([])
    const getViews = async () => {
        const { data, error } = await supabase.from('views').select('*')//RLS Policies
        
        if (data) {
            setViews(data)
        } else {
            console.log(error);
            
        }
    }

    return {
        views, setViews
    }
}