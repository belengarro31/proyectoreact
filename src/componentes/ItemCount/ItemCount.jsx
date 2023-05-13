import { useState } from "react"
import { useContador } from "../Hook/HookContador"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const {contador, incrementar, decrementar} = useContador(initial, stock)

return(
    <div className="Counter">
        <div className="Controls">
            <button className="Button" onClick={decrementar}>-</button>
            <h4 className="Number">{contador}</h4>
            <button className="Button" onClick={incrementar}>+</button>
        </div>
        <div>
            <button className="Button" onClick={()=> onAdd(contador)} disabled={!stock}>
                Agregar al carrito
            </button>
            
        </div>
    </div>
)

}

export default ItemCount;
