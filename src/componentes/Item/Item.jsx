
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

export const Item = ({id, name, price, img, description}) =>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                    <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('Cantidad agregada', quantity)}/>
                </p>
            </section>
            <footer className="ItemFooter">
              
            </footer>
        </article>
    )
}

export default Item