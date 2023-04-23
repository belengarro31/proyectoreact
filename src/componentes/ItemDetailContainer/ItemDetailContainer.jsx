//import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import { getProductById } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    useEffect(()=>{
        getProductById('1')
           .then(reponse=>{
                setProduct(reponse)
           })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...products} />        
        </div>
    )

}

export default ItemDetailContainer