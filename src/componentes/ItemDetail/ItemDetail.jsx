
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail=({productos}) =>{
    console.log(productos)
    const {id, name, price, img, description} = productos
    const onAdd = (cantidad) => {
        console.log(cantidad);
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
                <ItemCount initial={1}stock={10}onAdd={onAdd}/>

              </footer>
        </article>
    )
}

export default ItemDetail