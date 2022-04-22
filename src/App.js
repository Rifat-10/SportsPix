import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App bg-dark'>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
