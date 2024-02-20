import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductsPage.css';
import productTestImage from '../assets/products/product-test-image.JPG';

const ProductsPage = () => {
  const products = [
    { code: 'a', title: 'Product A', price: 10, image: productTestImage },
    { code: 'b', title: 'Product B', price: 20, image: productTestImage },
    { code: 'c', title: 'Product C', price: 30, image: productTestImage }
  ];

  return (
    <div className="products-page">
      <h2 className="headertext-no-shadow">Products</h2>
      <div className="products-page-container">
        {products.map(product => (
          <Link
            key={product.code}
            to={`/products/product-${product.code}`}
            className="products-page-tab"
          >
            <div className="products-page-info">
              <img src={product.image} alt={product.title} className="products-page-image" />
              <h3>{product.title}</h3>
              <p>Product code: {product.code}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;