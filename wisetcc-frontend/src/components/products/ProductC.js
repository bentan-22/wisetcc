import React from 'react';
import '../../css/Product.css';
import productImageC from '../../assets/products/product-c.jpg';

const ProductC = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productImageC} alt="Product C" />
      </div>
      <div className="product-info">
        <h2>Product C</h2>
        <p>Description: This is a description of Product C.</p>
        <p>Code: C</p>
        <p>Price: $10</p>
      </div>
    </div>
  );
};

export default ProductC;