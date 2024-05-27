import logo from './logo.svg';
import './App.css';
import GameScript from './components/Game.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
      <a className='navbar-brand'>Bienvenido! Invitado</a>
      <form className='d-flex'>
        </form>
      </div>
    </nav> 

<GameScript/>
<Footer />
  </div>
  );
}

export default App;
