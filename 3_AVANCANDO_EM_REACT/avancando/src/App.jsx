import "./App.css";

//2- imagem em assets
import night from "./assets/night.jpg";

//3- useState
import Data from "./components/Data";

//4 - Renderizando lista
import ListRender from "./components/ListRender";

//7 - conditional render
import ConditionalRender from "./components/ConditionalRender";

//8- props
import ShowUserName from "./components/ShowUserName";

//9 - desestruturando props
import CarDetails from "./components/CarDetails";

//11- renderização de lista com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

//12 fragments
import Fragments from "./components/Fragments";

//13- children
import Conteiner from "./components/Conteiner";

//14- function em prop
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";

//15 - state lift
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  //14- function em prop
  function showMessage() {
    console.log("Função em prop");
  }

  //15- state lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <>
      <div style={{ paddingBottom: "500px" }}>
        <h1>avançando em react</h1>
        {/*1 - imagem em public */}
        <img src="/img.jpg" alt="alguma imagem" />
        {/*1 - imagem em assets */}
        <img src={night} alt="outra imagem" />
        {/*3- useState */}
        <Data />
        {/*4- lista render */}
        <ListRender />
        {/* 7- render Condicional */}
        <ConditionalRender />
        {/* 8- props */}
        <ShowUserName name="Thiago" />
        {/* 9- desetruturando props */}
        <CarDetails brand="VW" km={999} color="verde" />
        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={89} color="Branco" />
        <CarDetails km={999} brand="Audi" color="Azul" />
        {/* 11- renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
          />
        ))}
        {/* 12- fragments */}
        <Fragments />
        {/* 13- children */}
        <Conteiner>
          <p>Alguma coisa</p>
        </Conteiner>
        <Conteiner>
          <div>
            <h2>Teste</h2>
            <p>Meu conteiner</p>
          </div>
        </Conteiner>
        {/* 14- function em prop */}
        <ExecuteFunction myFunction={showMessage} />
        {/* 15- state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  );
}

export default App;
