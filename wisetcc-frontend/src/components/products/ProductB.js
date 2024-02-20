import React from 'react';
import '../../css/Product.css';
import productImageB from '../../assets/products/product-b.jpg';

const ProductB = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productImageB} alt="Product B" />
      </div>
      <div className="product-info">
        <h2>Product B</h2>
        <p>Description: This is a description of Product B.</p>
        <p>Code: B</p>
        <p>Price: $10</p>
      </div>
    </div>
  );
};

export default ProductB;