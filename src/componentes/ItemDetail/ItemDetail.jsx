import ItemCount from "../ItemCount/ItemCount"

const ItemDetail=({id, name, img, price, description}) =>{
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
                    Precio: ${price} 
                </p>
             </section>
             <footer className="ItemFooter">
                <ItemCount />

              </footer>
        </article>
    )
}

export default ItemDetail