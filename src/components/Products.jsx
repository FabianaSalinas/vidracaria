import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import "../styles/products.css"
import ProductsInfo from './ProductsInfo';
import sombra from '../assets/sombra3.png'


const Products = () => {
  return (
    <div className="product-container">
      {ProductsInfo.map((product, index) => (
        <div key={index} className="product-card">
           <div className="product-info">
           <Typography variant="h2" gutterBottom>
            {product.title}
          </Typography>

          {/* Adicione a descrição abaixo do título */}
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Link to={`/contact/`} className="info-button">Orçamento</Link> 
          <Link to={`/product/${product.id}`} className="info-button">Mais Informações</Link> 
           
           </div>
 
  <Grid item xs={6} md={4} className='image-service'>

 
    <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '620px', // Defina a largura desejada aqui
                  height: '400px', // Isso mantém a proporção original da imagem
                  maxWidth: '100%'
                }}
              />
                <img
                src={sombra} // Substitua pelo caminho da imagem que você deseja adicionar
                alt="Imagem Superior"
                className="top-image"
              />
    
  </Grid>
  
             
              </div>
        
      ))}
    </div>
  );
};

export default Products;

