import { FiSearch } from "react-icons/fi";
import './style.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className='containerInput'>
        <input type="text"
          placeholder="Digite seu CEP... " />

        <button className="buttonSearch">
          <FiSearch size={25} color="#000" />
        </button>
      </div>
      <main className="main">
        <h2>CEP: 79</h2>
        <span>Rua teste ALgum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande</span>


      </main>
    </div>
  );
}

export default App;
