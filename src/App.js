import './App.css';
import './Components/Button/Button';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';

const { getData } = require('./db/db');
const allCards = getData();

function App() {
  return (
    <>
      <Button title={'Add'} type={'add'} disable={false} />
      <Button title={'Remove'} type={'remove'} disable={false} />
      <Button title={'Checkout'} type={'checkout'} disable={false} />
      {allCards.map(item => <Card item={item} key={item.id}/>)}
    </>
  );
}

export default App;
