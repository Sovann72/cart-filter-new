import { useState } from 'react'
import { Card } from './Card'
import { CardWrapper } from './CardWrapper'
import { CartWrapper } from './CartWrapper'

export const Container = (props) => {
  const [childArr, setChildArr] = useState([]);
  const ItemList = [{
    name: 'sovann',
    id: 0,
    isSelected: false,
  },
  {
    name: 'punleur',
    id: 1,
    isSelected: false,
  },
  {
    name: 'pisal',
    id: 2, 
    isSelected: false,
  },
  {
    name: 'rith',
    id: 3,
    isSelected: false,
  },
  {
    name: 'nak',
    id: 4,
    isSelected: false,
  },
  {
    name: 'cheang',
    id: 5,
    isSelected: false,
  }]

  const getItem = (item) => {
    const temItems = Items.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === item.id) {
        console.log();
        return {
          name: item.name,
          id: item.id,
          isSelected: item.isSelected
        };
      }
      // 👇️ otherwise return object as is
      return obj;
    });
    setItems(temItems);
  }

  
  
  const [Items, setItems] = useState(ItemList);

  return <div className='mt-5 mx-auto grid grid-cols-1 gap-24'>
    <CardWrapper itemList={Items} onClick={getItem}/>
    <CartWrapper itemList={Items}/>
  </div>
}