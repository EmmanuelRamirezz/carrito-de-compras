import storeItems from '../data/products.json'
import Item from './Item';

function ItemList (){
  return(
		<div className='w-11/12 mx-auto pt-8'>
			    <div className='grid grid-cols-4 grid-flow-row gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
      				{storeItems.map((product)=>{
        			return <Item key = {product.id} {...product}/>
        			{/* Los 3 puntos significa que le estoy pasando todas las propiedades de product */}
      				})}
    			</div>
		</div>
  )
}
export default ItemList;