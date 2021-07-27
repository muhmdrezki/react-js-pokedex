import "./style/main.scss";
import { Routes } from "./Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <header className="my-4">
        <h4 className="text-center"> POKEDEX APP </h4>
      </header>

      <Routes />
    </Container>
  );
}

export default App;
