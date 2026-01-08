import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem('user-theme') || 'light');

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  // Theme toggle logic
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {/* Navbar section */}
      <nav className="navbar">
        <div className="logo">KHORSANE<span>WHOLESALER</span></div>
        <div className="nav-links">
          <a href="/" className="nav-item">Home</a>
          <a href="/" className="nav-item">About Us</a>
          <a href="/" className="nav-item">Services</a>
          <a href="/" className="nav-item">Contact Us</a>
          <button onClick={toggleMode} className="mode-btn">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* Hero section */}
      <header className="hero">
        <h1>KHORSANE <span className="orange-text">WHOLESALER</span></h1>
        <p>Your Trusted Wholesale Partner</p>
        <button className="btn">Explore Now</button>
      </header>

      {/* Services section */}
      <div className="grid-container">
        <div className="content-box">
          <h2>Our Services</h2>
          <p className="description">Reliable wholesale solutions for your business needs.</p>
          <p>◆ Wide Range of Products</p>
          <p>◆ Fast Delivery</p>
          <button className="btn">Learn More</button>
        </div>
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600" className="side-img" alt="warehouse" />
      </div>

      {/* Pricing section */}
     <div className="pricing-bg">
  <h2 className="section-title">Recommended Subscriptions</h2>
  <div className="grid-container">
    <PricingCard 
      title="Basic" 
      price="99" 
      img="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400"
    />
    <PricingCard 
      title="Standard" 
      price="199" 
      img="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400" 
    />
    <PricingCard 
      title="Premium" 
      price="299" 
      img="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400" 
    />
  </div>
</div>
    </div>
  );
}

// Pricing card component
// Pricing card component
function PricingCard({ title, price, img }) {
  return (
    <div className="card">
      {/* Now using the img prop for different images */}
      <img src={img} alt={`${title} package`} />
      <div className="card-info">
        <h3>{title} Package</h3>
        <p className="price-text">${price}/month</p>
        <button className="btn">Select</button>
      </div>
    </div>
  );
}

export default App;