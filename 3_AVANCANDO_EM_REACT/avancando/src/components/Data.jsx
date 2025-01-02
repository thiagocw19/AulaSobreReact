import { useState } from "react";

const Data = () => {
  let someData = 10;
  const [anotherNumber, setAnotherNumber] = useState(15);
  const [outroExemplo, setOutroExemplo] = useState("Alguma string");
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar Variável</button>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar Variável</button>
      </div>
      <div>
        <p>String: {outroExemplo}</p>
        <button onClick={() => setOutroExemplo("Mudei a String")}>
          Mudar String
        </button>
      </div>
    </div>
  );
};

export default Data;
