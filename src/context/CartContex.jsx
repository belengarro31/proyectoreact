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

    

    //precio total de la compra
    const totalCarrito = () => {
        return cartList.reduce(
          (total, producto) => total + producto.price * producto.cantidad,
          0
        );
      };


    //eliminar por item
    const borrarCantidad = (id) => {
        const index = cartList.findIndex((prod) => prod.id === id);
        if (index !== -1) {
          const nuevoCarritoLista = [...cartList];
          if (nuevoCarritoLista[index].cantidad > 1) {
            nuevoCarritoLista[index].cantidad -= 1; 
            setCartList(nuevoCarritoLista);
            toast("Eliminaste una unidad")        
        }
    }
}

    //VaciarCarrito
    const vaciarCarrito=() =>{
        setCartList([])
    }

    return (
        <CartContex.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalCarrito,
            borrarCantidad
        }}>
            {children}
        </CartContex.Provider>
    )
}