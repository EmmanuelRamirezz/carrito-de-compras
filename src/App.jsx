import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemList from './components/ItemList'
//rutas
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* Mostramos el componente al inicio de la app */}
          <Route path="/" element={<ItemList/>}/>
          <Route path="/cart" element={<ShoppingCart/>}/>
        </Routes>
      </Router>

    </>
  )
}
export default App
