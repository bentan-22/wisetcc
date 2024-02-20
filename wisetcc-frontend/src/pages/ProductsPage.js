import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductsPage.css';
import productImageA from '../assets/products/product-a.jpg';
import productImageB from '../assets/products/product-b.jpg';
import productImageC from '../assets/products/product-c.jpg';

const ProductsPage = () => {
  const products = [
    { code: 'a', title: 'Product A', price: 10, image: productImageA },
    { code: 'b', title: 'Product B', price: 20, image: productImageB },
    { code: 'c', title: 'Product C', price: 30, image: productImageC }
  ];

  return (
    <div className="products-page">
      <h2 className="headertext-no-shadow">Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <Link
            key={product.code}
            to={`/products/product-${product.code}`}
            className="product-tab"
          >
            <div className="product-info">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;