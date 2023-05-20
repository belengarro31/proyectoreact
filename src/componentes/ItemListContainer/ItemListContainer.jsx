import { useEffect, useState } from "react"
import  { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading.jsx";
import {collection,  getFirestore, getDocs, where, query} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [productos, setproductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()
    
    useEffect(() => {
      const dbFirestore = getFirestore()
      const queryCollection= collection(dbFirestore, "productos")

      if (!category){
          getDocs(queryCollection)
            .then(res=>setproductos(res.docs.map(product=>({id: product.id, ...product.data()} )) ))
            .catch(error=>console.log(error))
            .finally(()=>setIsLoading(false))
      }else{
        const queryCollectionFiltered = query(queryCollection,where("category", "==", category))

        getDocs(queryCollectionFiltered)
          .then(res=>setproductos(res.docs.map(product=>({id: product.id, ...product.data()} )) ))
          .catch(error=>console.log(error))
          .finally(()=>setIsLoading(false))
      }
      }, [category])

      return (
        <>
          {isLoading ?
            <Loading/>
            :
            <ItemList productos={productos} />
          }
        </>
      )
}

export default ItemListContainer
       
    
    
    