import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Product.css';
import productTestImage from '../../assets/products/product-test-image.JPG';
import productTestImageReverse from '../../assets/products/product-test-image-reverse.JPG';

const ProductA = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [productTestImage, productTestImageReverse];

  const handlePrevImage = () => {
    const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const productCode = 'A';
  const productName = 'Product A';

  return (
    <div className="product">
      <div className="product-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`View ${index + 1}`}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>
      <div className="product-image-large">
        <button className="arrow left" onClick={handlePrevImage}>&lt;</button>
        <img src={images[selectedImageIndex]} alt={`View ${selectedImageIndex + 1}`} />
        <button className="arrow right" onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="product-info">
        <h2>Product A</h2>
        <p>Description of Product A</p>
        <p>Product code: A</p>
        <p>Price: $10</p>
        <Link to={`/appointment?productName=${encodeURIComponent(productName)}&productCode=${productCode}`}>
          <button className="enquire-button">Enquire</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductA;