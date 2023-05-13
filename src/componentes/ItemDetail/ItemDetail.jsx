
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContex } from "../../context/CartContex"


const ItemDetail=({productos}) =>{

    const [isCant, setIsCant] = useState(false)

    //console.log(productos)
    const {id, name, price, img, description} = productos
   
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)


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
                       <button>Terminar compra</button>
                       <button>Seguir comprando</button>
                       </>
                    }
                </>
              </footer>
        </article>
    )
}

export default ItemDetail