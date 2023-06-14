import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

function ShoppingCart (){
    //Es el context con un useState el cual nos da acceso a los valores del carrito desde toda la app
    const[cart, setCart] = useContext(CartContext);

    //nos permite encontrar la suma total del arreglo del carrito
    const quantity = cart.reduce((acumulacion, current) => {
     return acumulacion + current.quantity; 
    }, 0) //se puede hacer con for

    //Ver el precio total
    //Se itera a todos lo productos del carrito, y extraemos la cantidad y el precio de los mismos para ser multiplicados y ser agregados a totalPrice
    const totalPrice = cart.reduce((acumulador, current) => {
      return acumulador + current.quantity * current.price;
    },0);
  return(
    <div>
      <div>
        Items in cart: {quantity}
      </div>
      <div>
        Total: {totalPrice} $
      </div>
      <button onClick={() => console.log(cart)}>
        Checkout
      </button>
    </div>
  )
}
export default ShoppingCart;