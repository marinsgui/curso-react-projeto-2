import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  // const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const reverseClass = reverse ? 'reverse' : '';

  // const handleClick = () => {
  //   setReverse(!reverse);
  // }

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        
  //       <h1>Contador: {counter}</h1>

  //       <button type='button' onClick={handleIncrement}>Increment</button><br />

  //       <button type='button' onClick={handleClick}>Reverse {reverseClass}</button>
  //     </header>
  //   </div>
  // );

  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  },[]);

  console.log('Pai, renderizou');

  return (
    <div className='App'>
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}

export default App;
