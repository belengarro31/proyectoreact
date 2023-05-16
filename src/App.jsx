import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./componentes/Navbar/NavBar";
import CartWidget from "./componentes/CartWidget/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import Item from "./componentes/Item/Item";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContexProvider } from "./context/CartContex";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartConteiner } from "./componentes/CartContainer/CartContainer";

function App() {
  return (
      <CartContexProvider>
    <BrowserRouter>
      <NavBar />
      <main className="mainContainer">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:prod" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartConteiner/>} />
        </Routes>
      </main>
    </BrowserRouter>
    </CartContexProvider>
  );
  
};

export default App;
