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