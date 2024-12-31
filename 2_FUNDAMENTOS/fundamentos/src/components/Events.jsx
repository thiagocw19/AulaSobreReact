import React from "react";

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  //8- Função de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando</h1>;
    } else {
      return <h1>Renderizando outra coisa!</h1>;
    }
  };

  // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando")}>Clique</button>
      </div>
      {/*7- evento com função */}
      <div>
        <button onClick={handleClick}>Clique com Função</button>
      </div>
      {/*8- Função com render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
