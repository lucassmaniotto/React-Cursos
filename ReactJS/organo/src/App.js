import Banner from "./components/Banner/index";
import Input from "./components/Input/index";

function App() {
  return (
    <div className="App">
      <Banner />
      <Input label="Nome" placeholder="Digite seu nome"/>
      <Input label="Cargo" placeholder="Digite seu cargo"/>
      <Input label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
