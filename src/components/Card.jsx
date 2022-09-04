import { useState } from "react";

export const Card = (props) => {
  const [item, setItem] = useState(props.itemcard)

  const {isSelected} = item;
  // console.log(item);
  const handleClick = () => {
    console.log(isSelected);
    setItem((something) => ({...something, isSelected: !isSelected}));
    props.onClick(item);
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