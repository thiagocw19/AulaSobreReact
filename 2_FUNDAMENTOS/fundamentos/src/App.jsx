import "./App.css";
//2- Importando componente
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import Events from "./components/Events";

//5- Hierarquia
import MyComponent from "./components/MyComponent";

function App() {
  //3- comentários
  return (
    <>
      {/*3- comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  );
}

export default App;
