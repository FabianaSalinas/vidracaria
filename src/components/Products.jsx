import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import sacadaProdutos from '../assets/sacadaProdutos.png'

import "../styles/style.css"









const products = [
  {
    title: 'Portas',
    description: 'Portas de vidro, Portas sanfonada, Portas balcão,Portas Pivotante.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Sacadas',
    description: 'Sacadas / Sacadas articulada',
    image: sacadaProdutos,
  },
  {
    title: 'Janelas',
    description: 'Janelas de vidro, Janelas basculante.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Cobertura de vidro',
    description: 'Teto feito em vidro.',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Parede de vidro',
    description: 'Parede ou divisões em vidro',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Espelhos',
    description: 'Espelhos (comum, bisotê, Organico, Com LED, Montagem',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Box ',
    description: 'Box de vidro e acrilico',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Guarda corpo',
    description: 'Guarda corpo em vidro',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Abrigo de pia',
    description: 'Abrigo em vidro ou acrilico',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Revestimento de parede',
    description: 'Parede revestida com vidro',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Aquarios',
    description: 'Montagem de aquarios e personalização',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  // Add more products here...
];

const Products = () => {
  
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180}}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom 
            variant="h5" 
            component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" 
            color="text.secondary"
            style={{
              height: '70px',
              overflow: 'hidden',
            }}
            >
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;

