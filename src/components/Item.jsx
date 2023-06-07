function Item({id, name, price, imgUrl}){
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