import { useState } from 'react'
import { Card } from './Card'

export const CardWrapper = (props) => {
    
  const getItem = (item) => {
    props.onClick(item);
  }
  return <div className="w-5/6 h-1/2 mx-auto grid gap-5 xl:grid-cols-5 
  lg:grid-cols-4 
  md:grid-cols-3 
  sm:grid-cols-2">
    {props.itemList.map((item)=>
      <Card key={item.id} name={item.name} itemcard={item} onClick={getItem}/>
    )}
  </div>
}