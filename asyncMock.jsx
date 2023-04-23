
const products = [    
    {
        id: '1',
        name: "Pan",
        price: 250,
        img: "./src/img/Pan.jpg",
        description: "Descripcion de producto"
    },

    {id:'2', name: "Facturas",  price: 80, img:"./src/img/Facturas.jpg", description: "Descripcion de producto" },
    {id:'3', name: "Prepizza",  price: 150,img:"./src/img/Prepizza.png", description: "Descripcion de producto" }
]

export const getProducts = ()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById =(productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        }, 500)

    })
}