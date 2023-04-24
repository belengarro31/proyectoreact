import { useEffect, useState } from "react"
import { asyncMock } from '../../../asyncMock.jsx'
import  { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()
    
    useEffect(() => {
        if (!category) {
         asyncMock()
            .then(resultado => { setProducts(resultado) })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }else{
          asyncMock()
            .then(resultado => { setProducts(resultado.filter(productos=>productos.category === category)) })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }
      }, [category])
    
    
    return (
        <>
          {isLoading ?
            <h2>Cargando...</h2>
            :
            <ItemList products={products} />
          }
        </>
      )
}

export default ItemListContainer