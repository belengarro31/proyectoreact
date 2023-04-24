import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import { asyncMock } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})

    const { prod } = useParams()

    useEffect(()=>{
        asyncMock(prod)
           .then(reponse=>{
                setProduct(reponse)
           })
    }, [prod])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail productos={products} />        
        </div>
    )

}

export default ItemDetailContainer