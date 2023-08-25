import React, {useState} from 'react'; 
import './App.css';

function App() {

  const [number, setNumber] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  var numero;
  var numero2;

  function Soma(){
    numero = parseFloat(number);
    numero2 = parseFloat(number2);
    setResult(numero + numero2);
    //setResult(number + number2);
  }
  function Division() {
    setResult(number / number2);
  }
  function Multi() {
    setResult(number * number2);
  }
  function Subtrac() {
    setResult(number - number2);
  }

  return (
    <div className="App">
      <input
      type="number"
      number={number}
      onChange={event => setNumber(event.target.value)}
      />
      <input
      type="number"
      number={number2}
      onChange={event => setNumber2(event.target.value)}
      />
      <button onClick={Soma}>+</button>
      <button onClick={Division}>/</button>
      <button onClick={Multi}>*</button>
      <button onClick={Subtrac}>-</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
