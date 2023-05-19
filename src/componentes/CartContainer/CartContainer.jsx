import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContex";

export const CartConteiner = () =>{
    const{cartList, vaciarCarrito, totalCarrito, borrarCantidad, cantidadTotal} = useCartContext()

    if (cantidadTotal() === 0 ) {
        return(
            <div className='text-center p-5 m-5'>
                <h1 className=' display-5 fw-semibold my-5 text-danger'>No hay productos en el carrito</h1>
                <Link to='/' className='btn btn-outline-danger fw-semibold fs-5 m-5'>Realizar Compra</Link>
            </div>
        )}
    return(
        
        <div>
            {cartList.map((prod)=>(
                <div className="w-50">
                    <img className="w-25" src={prod.img} alt="imagen" key="cart-container"/>
                    <label>Precio:{prod.price} - Cantidad:{prod.cantidad} </label>                           
                    <button onClick={() => borrarCantidad(prod.id)} > X </button>  
                    
                </div>
            ) ) }

                <div className="cartTotal">
                        <h3>Total a pagar: $ { totalCarrito() } </h3>
                </div>
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito</button>              
        </div>
      
    )    
    
}

