import { useState,useEffect } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';

const { getData } = require('./db/db');
const allCards = getData();
const tele = window.Telegram.WebApp
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });
  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => (
          x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
        ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(x => x.id !== item.id))
    } else {
      setCartItems(cartItems.map(x => (
        x.id === item.id ? { ...exist, quantity: exist.quantity - 1 } : x
      )
      ))
    }

  }

  const onCheckout = () =>{
    tele.MainButton.text = "Pay";
    tele.MainButton.show();
  }

  return (
    <>
      <h1 className="heading">Training Menu</h1>

      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {allCards.map(item => <Card item={item} key={item.id} onAdd={onAdd} onRemove={onRemove}/>)}
      </div>

    </>
  );
}

export default App;
