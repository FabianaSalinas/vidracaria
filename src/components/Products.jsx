import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import sacadaProdutos from '../assets/sacadaProdutos.png'


const products = [
  {
    title: 'Product 1',
    description: 'Description of Product 1',
    image: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Sacadas',
    description: 'Sacadas / Sacadas articulada',
    image: sacadaProdutos,
  },
  // Add more products here...
];

const Products = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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