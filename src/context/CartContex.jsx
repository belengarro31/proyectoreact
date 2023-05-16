import { createContext, useContext, useState } from "react";

export const CartContex = createContext([])

export const useCartContext=()=>useContext(CartContex)

export const CartContexProvider = ({children})=>{
    //estados y funciones globales
    
    //listado carrito de compras
    const [cartList, setCartList] = useState([])

    const addToCart =(newProduct)=>{
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    //cantidad total de productos

    //precio total de la compra
    const totalCarrito = () => {
        return cartList.reduce(
          (total, producto) => total + producto.price * producto.cantidad,
          0
        );
      };


    //eliminar por item


    //VaciarCarrito
    const vaciarCarrito=() =>{
        setCartList([])
    }

    return (
        <CartContex.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalCarrito
        }}>
            {children}
        </CartContex.Provider>
    )
}