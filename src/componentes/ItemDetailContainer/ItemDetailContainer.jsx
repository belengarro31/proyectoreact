import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {
    const [productos, setproductos] = useState({})
    const [isLoading, setIsLoading] = useState(true)
  
    const { prod } = useParams()
  
    useEffect(() => {
      const dbFirestore = getFirestore()
      const queryDoc = doc (dbFirestore, 'productos', prod)
  
      getDoc(queryDoc)
        .then(res=> setproductos({id: res.id, ...res.data()}))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
  
    }, [])

    return (
        <div>
            {isLoading ?
            <Loading/>
            :
            < ItemDetail productos={productos} />       
        
         }
        </div>
               
        
        
      )
}


export default ItemDetailContainer