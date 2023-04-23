import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import Item from './componentes/Item/Item'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:category' element={<ItemListContainer />} />
      <Route path='/detalle/:prod' element={<ItemDetailContainer />} />

      {/* <Route path='*' element={<NotFound/>} /> */}
      
    </Routes>
  </BrowserRouter>
)
    /*<div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} /> 
     
      <CartWidget />
       <ItemDetailContainer/>
      </div>
      
  );*/
}

export default App
