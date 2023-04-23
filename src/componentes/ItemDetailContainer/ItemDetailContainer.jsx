import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import { asyncMock } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    const { prod } = useParams()

    useEffect(()=>{
        asyncMock('1')
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