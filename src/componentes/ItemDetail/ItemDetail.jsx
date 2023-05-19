
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContex,  useCartContext } from "../../context/CartContex"
import { Link } from "react-router-dom"

const ItemDetail=({productos}) =>{

    const [isCant, setIsCant] = useState(false)

  
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({...productos, cantidad})

        setIsCant(true)
    }

    return(
        <div key={productos.id}>
        <article className="CardItem">
            <header className="Header">
                <h2 className="className">
                    {productos.name}
                </h2>
             </header>
            
                <img src={productos.img}  className="ItemImg"/>
             
             <section>
                <p className="Info">
                    Descriptcion: {productos.description} 
                </p>
                <p className="Info">
                    Precio: $ {productos.price} 
                </p>
             </section>
             <footer className="ItemFooter">
               <>
                 {
                    !isCant ?      
                       <ItemCount initial={1}stock={10}  onAdd={onAdd}/>
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
        </div>
    )
}
//initial={1}stock={10}

export default ItemDetail