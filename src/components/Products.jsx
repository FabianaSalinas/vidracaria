import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "../styles/style.css"
import ProductsInfo from './ProductsInfo';


const Products = () => {
  return (
    <div className="product-container">
      {ProductsInfo.map((product, index) => (
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
              <Button size="small">Orçamento</Button>
              <Link to={`/product/${product.id}`}>Mais Informações</Link> 
            </CardActions>
          </Card>
        
        </div>
      ))}
    </div>
  );
};

export default Products;

