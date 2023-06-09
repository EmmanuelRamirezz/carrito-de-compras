import storeItems from '../data/products.json'
import Item from './Item';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/ShoppingCartContext';

function ItemList() {
    //Es el context con un useState el cual nos da acceso a los valores del carrito desde toda la app
    const[cart, setCart] = useContext(CartContext);

    //nos permite encontrar la suma total del arreglo del carrito
    const quantity = cart.reduce((acumulacion, current) => {
     return acumulacion + current.quantity; 
    }, 0) //se puede hacer con for 
  return (
    <div className='w-11/12 mx-auto pt-8'>
      <div className='grid grid-cols-4 grid-flow-row gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {storeItems.map((product) => {
          return <Item key={product.id} {...product} />
          {/* Los 3 puntos significa que le estoy pasando todas las propiedades de product */ }
        })}
      </div>
      <ul className="my-auto text-lg text-white">
          <Link to = {"/cart"}>
            <li className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 mx-auto hover:h-16 hover:w-16  mt-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
               
              <div className="cart-count mx-auto text-center">
              Cart items:
              <span> </span>
                {quantity}
              </div> 
            </li>
          </Link>
        </ul>
    </div>
  )
}
export default ItemList;