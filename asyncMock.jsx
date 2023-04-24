
const products = [    
    {
        id: '1',
        name: "Pan",
        price: 250,
        img: "/public/Pan.jpg",
        category: "panificacion",
        description: "Descripcion de producto"
    },

    {id:'2', name: "Facturas",  price: 80, img:"/public/Facturas.jpg", category: "pasteleria", description: "Descripcion de producto" },
    {id:'3', name: "Prepizza",  price: 150, img:"/public/Prepizza.png",category: "panificacion", description: "Descripcion de producto" },
    {id:'4', name: "Pastafrola",  price: 300, img:"/public/pastafrola.jpg",category: "pasteleria", description: "Descripcion de producto" },
]



export const asyncMock = (id) =>{
    return new Promise((res, rej)=>{

        setTimeout(()=>{
            res(!id ? products : products.find(product=> product.id === id))
        }, 1000)
    }) 
}

