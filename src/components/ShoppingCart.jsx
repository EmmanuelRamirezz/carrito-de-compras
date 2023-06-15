import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { redirect } from "react-router-dom";

function ShoppingCart() {
  //Es el context con un useState el cual nos da acceso a los valores del carrito desde toda la app
  const [cart, setCart] = useContext(CartContext);

  //nos permite encontrar la suma total del arreglo del carrito
  const quantity = cart.reduce((acumulacion, current) => {
    return acumulacion + current.quantity;
  }, 0) //se puede hacer con for

  //Ver el precio total
  //Se itera a todos lo productos del carrito, y extraemos la cantidad y el precio de los mismos para ser multiplicados y ser agregados a totalPrice
  const totalPrice = cart.reduce((acumulador, current) => {
    return acumulador + current.quantity * current.price;
  }, 0);


  const [endToggle, setEndToggle] = useState(false)

  const redirection = () => {
    const end = document.getElementById('end');
    setEndToggle(!endToggle)

    if(!endToggle){
      end.classList.remove('hidden');
    }else{
      end.classList.add('hidden')
    }
  }
  return (
    <section>
      <div className='w-52 mx-auto mt-40 rounded-2xl bg-slate-300 p-4'>
        <div>
          <h2 className="text-xl font-bold pb-4">Items in cart: {quantity}</h2>
        </div>
        <div>
          {cart.map((item) => {
             return (
              <div key={item.id} className="mx-auto py-2">
                {item.quantity}<span> </span>{item.name}<span>: </span>
                {item.price * item.quantity}$             
              </div>
             )  
          })}
        </div>
        <div className="text-xl font-bold pt-4">
          Total: {totalPrice} $
        </div>
        <button  className ="block mx-auto bg-yellow-200 p-2 rounded-md mt-6 font-bold" onClick={() => redirection()}>
          Checkout
        </button>

      </div>

      <p className="hidden text-center mt-20 text-xl" id="end">Thanks for using my app</p>
    </section>

  )
}
export default ShoppingCart;