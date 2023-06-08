
import './App.css'
import Navbar from './components/Navbar'
import ItemList from './components/ItemList'
import ShoppingCart from './components/ShoppingCart'
import ShoppingCartContext from './contexts/ShoppingCartContext'
//rutas
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <ShoppingCartContext>
      <Router>
        <Navbar/>
        <Routes>
          {/* Mostramos el componente al inicio de la app */}
          <Route path="/" element={<ItemList/>}/>
          <Route path="/cart" element={<ShoppingCart/>}/>
        </Routes>
      </Router>
      </ShoppingCartContext>
    </>
  )
}
export default App
