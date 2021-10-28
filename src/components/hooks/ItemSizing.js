import { useEffect, useState } from "react";

const useGetElementSize = (ref) => {
    
    const [elementHeight, setElementHeight] = useState(0)
    const [elementWidth, setElementWidth] = useState(0)
    const [modalWidth, setModalWidth] = useState(0)
  
 
    useEffect(() => {
       if(ref.current) {
        setElementWidth(ref.current.offsetWidth)      
        setElementHeight(ref.current.offsetHeight) 
        setModalWidth(ref.current.offsetWidth)
       }
      
    }, [ref])

    return { elementWidth, elementHeight, modalWidth }
}

export default useGetElementSize