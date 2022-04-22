import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App bg-dark'>
      <NavBar></NavBar>
      
    </div>
  );
}

export default App;
