import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title}- The Kid Zone`;
    }, [title])
}

export default useTitle;