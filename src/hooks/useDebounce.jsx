import { useEffect, useState } from "react"

export const useDebounce = (val,delay) =>{
    const [debounce, setDebounce] = useState(val)
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebounce(val)
        },delay)
        return ()=>clearTimeout(timer)
    },[val,delay])
    
    return debounce
}