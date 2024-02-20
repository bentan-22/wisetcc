import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import ProductsPage from './pages/ProductsPage';
import ProductA from './components/products/ProductA';
import ProductB from './components/products/ProductB';
import ProductC from './components/products/ProductC';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/product-a" element={<ProductA />} />
          <Route path="/products/product-b" element={<ProductB />} />
          <Route path="/products/product-c" element={<ProductC />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;