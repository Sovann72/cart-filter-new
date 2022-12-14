import { useEffect, useState } from "react";

export const Card = (props) => {
  const [item, setItem] = useState(props.itemcard)

  const {isSelected} = item;
  useEffect(() => {
    console.log("isSelected is ",isSelected);
    props.onClick(item);
  }, [item]);
  const handleClick = () => {
    setItem((something) => ({...something, isSelected: !isSelected}));
    
    console.log('item is', item);
  }
  return (
    <div
      className="border flex flex-col justify-between h-32 text-center">
      <p
        style={{
          color: item.isSelected ? 'white' : 'green',
          backgroundColor: item.isSelected ? 'green' : 'white',
        }}>
        {props.name} {item.isSelected.toString()}
      </p>
        {/* {console.log(item.isSelected.toString())} */}
      <button
        className="border rounded p-1"
        type="button"
        onClick={handleClick} >
        {item.isSelected ? 'Delete from Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}