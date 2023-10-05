import React from 'react';
import { useParams } from 'react-router-dom';


import "../styles/style.css"


const ProductDetail = ({ products }) => {
  // Use useParams para obter o ID do produto da URL
  const { id } = useParams();
  
  // Encontre o produto correspondente com base no ID
  const product = products.find(product => product.id === parseInt(id));

  // Verifique se o produto foi encontrado
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title}  />
      </div>
      <div className="product-info-detail">
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>
        {product.info && <p className="product-info-detail">{product.info}</p>}
        {product.list && (
          <ul className="product-list">
            {product.list.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
