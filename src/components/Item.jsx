import {CartContext} from "../contexts/ShoppingCartContext"
import { useContext } from "react";

function Item({id, name, price, imgUrl}){

  //funcion add to cart
  //Me traigo el contexto y se lo pongo al use state. Es un arreglo vacio
  const [cart, setCart] = useContext(CartContext);
    //funcion add to cart
  const addToCart = () => {
    //setCart puede recibir funciones como parametro. [Verifica si el producto agregado ya estaba en el carrito]
    setCart((currItems) => {
      //Busca en el carrito si el profucto seleccionado se encuentrá ahí. id es el producto seleccionado
      const isItemsFound = currItems.find((item) => item.id === id);
      //Si el producto ya estaba, entonces retorna un nuevo arreglo
      if (isItemsFound) {
        //Busca en el el carrito el producto que se seleccionó
        return currItems.map((item) => {
        //Confirma que si se encontró al verificar el id
          if (item.id === id) {
            //le agrega +1 a la propiedad quantity
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        //Si el producto seleccionado no está en el carrito entonces copia los productos que ya estaban y agregamos el nuevo producto seleccionado con su respectivo id, precio y le añadimos la propiedad quantity con valor 1
        return [...currItems, { id, name, quantity: 1, price }];
      }
    });
  };
  //Funcion para remover articulos del carrito
  //Necesita el id del articulo a remover
  const removeItem = (id) => {
    //le damos acceto a los elementos del carrito
    setCart((currItems) => {
      //Buscamos dentro de los elementos del carrito un elemento que coincida con el id que le hemos pasado como parametro usando .find
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        //Si la propiedad quantity del producto que queremos eliminar es = 1 entonces me retorna los elementos del carrito menos del producto que coincide con el id que hemos enviado
        return currItems.filter((item) => item.id !== id);
      } else {
        //Si el producto con el id que enviamos tiene más de 2 unidades en quantity, entonces se le resta 1
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
//Muestra la cantidad de un producto en especifico en el carrito
  const getQuantityById = (id) => {
     // Busca en el carrito un elemento que coincida con el id que mandamos. Y si esto nos retorna algo, vamos a extraer la cantidad sino nos debe retornar 0
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  //Creamos una variable la cual será el resultado de la funcion que hicimos. El cual es la cantidad de productos de un articulo
  const quantityPerItem = getQuantityById(id);

  return(
    <div className="border-2 p-5">
      {quantityPerItem > 0 && (
        <div className="mx-auto mb-4 text-center text-white w-10 bg-orange-300 rounded-xl font-bold">
          {quantityPerItem}
        </div>
      )}
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
      {/*Mostramos el boton de Add to cart si no lo tenemos en el carrito. Y si ya lo tenemos debe de mostrar Add more*/}
      {
        quantityPerItem === 0 ? (
          <button className="bg-green-400 py-2 px-4 mt-8  rounded-3xl text-white"     
          onClick={() => addToCart()} >
            Add to cart
          </button>
        ):
        (
          <button className="bg-blue-400 py-2 px-4 mt-8 mr-4 rounded-3xl text-white"     
          onClick={() => addToCart()} >
            Add more
          </button>
        )
      }
        {/* Muestra el siguiente botton si la cantidad del elemento es mayor a 0 */}
      {
        quantityPerItem > 0 && <button className="bg-red-400 py-2 px-4 mt-8  rounded-3xl text-white" onClick={() => removeItem(id)}>
          Substract item
        </button>
      }
      
    </div>
  )
}
export default Item;