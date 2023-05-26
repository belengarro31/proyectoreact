import {  Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContex";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from 'sweetalert2'


export const CartConteiner = () =>{
    const [id, setId]= useState("")

    const [dataForm, setDataForm]=useState({
        name:"",
        phone:"",
        email:""
    })  
    const{cartList, vaciarCarrito, totalCarrito, borrarCantidad, cantidadTotal} = useCartContext()

    const generarOrden=(evt)=>{
        evt.preventDefault()
        const order = {}
        order.buyer=dataForm
        order.items=cartList.map(({name, id, price})=>({id, name, price}))
        order.total=totalCarrito()

        const dbFirestore=getFirestore()
        const ordersCollection=collection(dbFirestore, "orders")

        addDoc(ordersCollection, order)
        .then (({id}) => {
            Swal.fire({
            icon: 'success',
            title: 'Muchas Gracias',
            text: `Tu pedido id: ${id} está en preparación`,
            confirmButtonColor: '#6CACE4',
            background: '#FFFFFE',
            color: '#120080'
            })
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setDataForm({
                name:"",
                phone:"",
                email:""
            })
            setTimeout(()=>{
                vaciarCarrito()

            }, 5000)
        })
    } 

    const handleOnChange = (evt)=>{
        console.log('nombre del input',evt.target.name)
        console.log('valor del input',evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
        }    
    
    if (cantidadTotal() === 0 ) {
        return(
            <div className='text-center p-5 m-5'>
                <h1 className=' display-5 fw-semibold my-5 text-danger'>No hay productos en el carrito</h1>
                <Link to='/' className='btn btn-outline-danger fw-semibold fs-5 m-5'>Realizar Compra</Link>
            </div>
        )}
    return(
        
        <div>
            {id.length!==0 && <h3>El id del producto es:{id}</h3>}
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
        
         
            {  <form classname="formFinal" onSubmit={generarOrden}>
            <input 
                    type='text' 
                    name="name" 
                    onChange={handleOnChange}
                    value={dataForm.name} 
                    placeholder="ingrese el nombre" 
                /> 

                <input 
                    type='text' 
                    name="phone" 
                    onChange={handleOnChange}
                    value={dataForm.phone} 
                    placeholder="ingrese el tel " 
                /> 
                <input 
                    type='text' 
                    name="email" 
                    onChange={handleOnChange}
                    value={dataForm.email} 
                    placeholder="ingrese el email" 
                /> 

                <button className="btn btn-outline-danger">Generar orden</button>  
            </form>  } 
                
            </div>    
    )}