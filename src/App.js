import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

let form = {
  num: 0,
  nome: "Welen",
  idade: 20
}
function App() {

  const [count, setCount] = useState(0)
  const mudarTitle = useEffect(() => {
    let countPast = document.title
    document.title = `Você digitou ${count} vezes!`
    console.log(countPast)
  })


  return (
    <>
      <div><h2>Você digitou {count} vezes!</h2></div>
      <div><button onClick={() => setCount(count + 1)}>Clicar</button></div>

      <button onClick={() => {
        form.num = count
      }}>Enviar</button>

    </>
  );
}

export default App;
