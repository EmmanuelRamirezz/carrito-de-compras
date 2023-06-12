import {CartContext} from "../contexts/ShoppingCartContext"
import { useContext } from "react";

function Item({id, name, price, imgUrl}){
  //funcion add to cart
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return(
    <div className="border-2 p-5">
      <div className="h-36 w-36 m-auto">
      <img 
      src={imgUrl}
      alt={name}
      width='150'
      className="m-auto object-fit w-36 h-32"
      />
      </div>
      
      <div className="flex">
      <div>{name}</div>
      <div className="ml-2">{price}$</div>
      </div>

      <button className="bg-green-500 py-2 px-4 mt-8  rounded-3xl text-white" 
      
      onClick={() => addToCart()} >
        Add to cart
      </button>
      
    </div>
  )
}
export default Item;