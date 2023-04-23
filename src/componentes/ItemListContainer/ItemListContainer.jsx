import { useEffect, useState } from "react"
import { getProducts } from '/asyncMock.jsx'
import ItemList from "../ItemList/ItemList"
    


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        getProducts()
            .then(reponse=>{
                setProducts(reponse)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [])
    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer