import React from 'react';
import '../../css/Product.css';
import productImageA from '../../assets/products/product-a.jpg';

const ProductA = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productImageA} alt="Product A" />
      </div>
      <div className="product-info">
        <h2>Product A</h2>
        <p>Description: This is a description of Product A.</p>
        <p>Code: A</p>
        <p>Price: $10</p>
      </div>
    </div>
  );
};

export default ProductA;