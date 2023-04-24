import { useState } from "react"

export const useContador = (initial, stock)=>{
    const [contador, setContador] = useState(initial)

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    return{contador, incrementar, decrementar}
}

