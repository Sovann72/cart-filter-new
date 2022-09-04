
import { Cart } from './Cart'

export const CartWrapper = (props) => {
  console.log('from CardWrapper: itemList', props.itemList);
  let Items = props.itemList
  return (
  <div className="border w-5/6 h-1/2 mx-auto grid gap-5 xl:grid-cols-5 
  lg:grid-cols-4 
  md:grid-cols-3 
  sm:grid-cols-2">
    {
      Items.map((item) => {
        if(item.isSelected === true){
          return <Cart item={item} key={item.id}/>
        }
        else{
          return;
        }
      })
    }
  </div>
  )
}