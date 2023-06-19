import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import Alltask from './components/Alltask';
import Edittask from './components/Edittask';
import Newtask from './components/Newtask';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/Alltask' element={<Alltask/>} />
          <Route path='/Newtask' element={<Newtask/>} />
          <Route path='/Edittask/:id' element={<Edittask/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
