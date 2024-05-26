import React, { useState } from 'react';
import './Card.css';
import Button from '../Button/Button';

function Card({ item,onAdd,onRemove}) {
  const { title, description, price, image } = item;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(item);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(item);
  }

  return (
    <div className='card'>
      <span
        className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}
      >
        {count}
      </span>
      <div className='image__container'>
        <img src={image} alt={title} />
      </div>
      <h4 className='card__title'>
        {title} . <span className='card__price'>{price}</span>
      </h4>
      <div className='btn-container'>
        <Button title='+' type="add" onClick={handleIncrement} />
        {count !== 0 ? <Button title='-' type="remove" onClick={handleDecrement} />:""}
      </div>
    </div>
  );
}

export default Card;
