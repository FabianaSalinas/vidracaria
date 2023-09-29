import React from'react'


//rotas

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/service';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';



import ProductDetail from './components/ProductsDetail';
import ProductsInfo from './components/ProductsInfo';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail products={ProductsInfo} />} />
          

        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;