//Context
import { createContext, useState } from "react";

export const CartContext = createContext(null);

function ShoppingCartContext ({children}){
  const [cart, setCart] = useState([]);
  return(
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}
export default ShoppingCartContext;