
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const Item = ({productos}) =>{
    console.log(productos)
   const {id, name, price, img, description} = productos
    return(
        <div>
            <img src={img} alt={name} className="ItemImg" />
            <div>
                <h1> {name}</h1>
                <p>{price}</p>
                
            </div>
            <Link to = {`/detail/${id}`}> 
            <button>
                Detalle
            </button> 
            </Link>
            
        </div>
    
    )
}

export default Item