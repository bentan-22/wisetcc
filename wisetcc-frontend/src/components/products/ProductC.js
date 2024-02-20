import React from 'react';
import '../../css/Product.css';
import productTestImage from '../../assets/products/product-test-image.JPG';

const ProductC = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productTestImage} alt="product test" />
      </div>
      <div className="product-info">
        <h2>Product C</h2>
        <p>Description of Product C</p>
        <p>Product code C</p>
        <p>Price: $10</p>
      </div>
    </div>
  );
};

export default ProductC;