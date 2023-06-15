import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/ShoppingCartContext';
import { useContext } from 'react';
function Navbar(){
  //Es el context con un useState el cual nos da acceso a los valores del carrito desde toda la app
  const[cart, setCart] = useContext(CartContext);

  //nos permite encontrar la suma total del arreglo del carrito
  const quantity = cart.reduce((acumulacion, current) => {
   return acumulacion + current.quantity; 
  }, 0) //se puede hacer con for   

  return(
    <div>
      <nav className="flex justify-between w-full h-24 px-10 bg-slate-500" >
              {/* Boton que nos redirige al home */}
        <Link to={"/"}  className="my-auto text-2xl font-bold text-white">
          <h2>
            Store Logo
          </h2>
        </Link>
        

        <ul className="my-auto text-lg text-white">
          <Link to = {"/cart"}>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-auto hover:h-12 hover:w-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
              Cart items: 
              <span className="cart-count mx-3">
                {quantity}
              </span> 
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;