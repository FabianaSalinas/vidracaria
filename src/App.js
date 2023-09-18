import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/service';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;