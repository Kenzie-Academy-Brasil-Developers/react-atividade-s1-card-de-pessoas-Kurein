import "./App.css";
import CardHandle from "./components/Developer";

function App() {
  return (
    <div className="App">
      <CardHandle name="Marcelo" age="23" country="Brasil" />
      <CardHandle name="Nataniel" age="19" country="Estados Unidos" />
      <CardHandle name="Isabela" age="25" country="Alemanha" />
    </div>
  );
}

export default App;
