import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// todo hook empiesa con la palabra hook
export const useFetchGifs = (categoria)=>{
    const [state, setstate] = useState({
        data:   [],
        loading: true
    });

    // esto se coloca es para que si cambia el componente lo que este en use useEffect no se llame constantemente
    // el useEffect se llamara la primera vez y si llegara a cambiar el valor de categoria, como no cambia no se ejectuta esa funcion useEffect de nuevo
    useEffect(() => {
        getGifs(categoria)
            .then((imgs)=>{
                setstate({
                    data:   imgs,
                    loading: false
                });
            })
    }, [categoria])

    return state; // { data:[], loading:true }
}