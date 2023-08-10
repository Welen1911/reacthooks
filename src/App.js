import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Quadro } from './components/Quadro';

export const App = () => {

  const [count, setCount] = useState(0)
  const mudarTitle = useEffect(() => {
    let countPast = document.title
    document.title = `Você digitou ${count} vezes!`
  })

  const hoje = new Date()
  const personagem = {
    nome: "DSpVuXI.png"
  }
  const nome = {
    pessoa: ""
  }
  nome.pessoa = prompt("Qual o seu nome? ")

  return (
    <>
      <div><h2>Você digitou {count} vezes!</h2></div>
      <div><button onClick={() => setCount(count + 1)}>Clicar</button></div>
      <div>
        <p>Hoje é {dataFormat(hoje)}, dia do {nome.pessoa}</p>
      </div>
      <div>
        <Quadro url={'https://i.imgur.com/' + personagem.nome} size={100} personagem={personagem.nome}></Quadro>
      </div>
    </>
  );
}

const dataFormat = (data) => {
  return new Intl.DateTimeFormat("pt-br", {weekday: "long"}).format(data)
}