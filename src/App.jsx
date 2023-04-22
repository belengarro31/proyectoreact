import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget'
//import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
 
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting={'Bienvenidos'} /> */}
      <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('Cantidad agregada', quantity)}/>
      <CartWidget />
      {/* <ItemDetailContainer/> */}
      </div>
      
  );
}

export default App
