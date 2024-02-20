import React from 'react';
import '../../css/Product.css';
import productTestImage from '../../assets/products/product-test-image.JPG';

const ProductB = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productTestImage} alt="product test" />
      </div>
      <div className="product-info">
        <h2>Product B</h2>
        <p>Description of Product B</p>
        <p>Product code B</p>
        <p>Price: $10</p>
      </div>
    </div>
  );
};

export default ProductB;