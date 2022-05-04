import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Darkmode from 'darkmode-js';
import Details from './components/Details';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContextProvider } from './contexts/CartContext';


function App() {
  // const options = {
  //   bottom: '64px', // default: '32px'
  //   right: '32px', // default: '32px'
  //   left: 'unset', // default: 'unset'
  //   time: '0.5s', // default: '0.3s'
  //   mixColor: '#fff', // default: '#fff'
  //   backgroundColor: '#fff',  // default: '#fff'
  //   buttonColorDark: '#100f2c',  // default: '#100f2c'
  //   buttonColorLight: '#fff', // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: '🌓', // default: ''
  //   autoMatchOsTheme: true // default: true
  // }
  
  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" >fak<b>E-commerce</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"cart"} className="nav-link" href="#">Cart</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Dummy</a></li>
                  <li><a className="dropdown-item" href="#">Another dummy</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><b>Bold dummy</b></a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <CartContextProvider >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
