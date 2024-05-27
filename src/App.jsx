import logo from './logo.svg';
import './App.css';
import GameScript from './components/Game.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
      <a className='navbar-brand'>Bienvenido! Invitado</a>
      <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active'> 
                Elimina los balones con clik!, Si se va una por la derecha pierdes!
              </a>
            </li>
            
          </ul>
          
          </div>
      
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
