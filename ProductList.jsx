import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    imageUrl: 'Paste your image url'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    imageUrl: 'Paste your image url'
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
