
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContex,  useCartContext } from "../../context/CartContex"
import { Link } from "react-router-dom"

const ItemDetail=({productos}) =>{

    const [isCant, setIsCant] = useState(false)

    //console.log(productos)
    const {id, name, price, img, description} = productos
   
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({...productos, cantidad})
        //console.log(cantidad)

        setIsCant(true)
    }

    

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="className">
                    {name}
                </h2>
             </header>
            
                <img src={img} alt={name} className="ItemImg"/>
             
             <section>
                <p className="Info">
                    Descriptcion: {description} 
                </p>
                <p className="Info">
                    Precio: $ {price} 
                </p>
             </section>
             <footer className="ItemFooter">
               <>
                
                
                    {
                    !isCant ?      
                       <ItemCount initial={1}stock={10}onAdd={onAdd}/>
                       :
                       <>
                       <Link to={"/cart"}>
                       <button>Terminar compra</button>
                       </Link>
                       <Link to={"/"}>
                       <button>Seguir comprando</button>
                       </Link>

                       
                       </>

                     
                       
                    }
                </>
              </footer>
        </article>
    )
}

export default ItemDetail