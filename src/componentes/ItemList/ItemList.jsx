import Item from "../Item/Item"

const ItemList = ({products})=>{
    return(
        <div className="ListGroup">
            {products.map(prod=>
            <Item key={prod.id}
            productos = {prod}/>
            )}
        </div>
    )
}

export default ItemList