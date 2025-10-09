import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import DealTimer from '../components/DealTimer';

const Home = () => {
  const navigate = useNavigate();

  const wishlistItems = [
    { title: 'UP TO 30% OFF', subtitle: 'For all hand purists', badge: 'A V A K E N' },
    { title: 'EXPLORE THE BIGGEST DISCOUNT', subtitle: 'Time Zone' },
    { title: 'Iconic', subtitle: '' },
    { title: "DON'T MISS THE YEAR END SELL", subtitle: '7 days left' },
    { title: 'Suggestion for You', subtitle: '' },
    { title: 'Watch more', subtitle: '' }
  ];

  const products = [
    { 
      title: 'Red leather GUCCI bag', 
      price: '4500 Belt', 
      originalPrice: '-9100 Belt',
      emoji: '👜'
    },
    { 
      title: 'LEXRX face cream', 
      price: '300 Belt', 
      originalPrice: '-740 Belt',
      emoji: '🧴'
    },
    { 
      title: 'Fuji Film DSLR camera', 
      price: '35,000 Belt', 
      originalPrice: '-43990 Belt',
      emoji: '📷'
    },
    { 
      title: 'Sky blue kids shoe', 
      price: '9.0 Belt', 
      originalPrice: '-1390 Belt',
      emoji: '👟'
    },
    { 
      title: 'Brown leather wallet', 
      price: '600 Belt', 
      originalPrice: '-980 Belt',
      emoji: '👛'
    },
    { 
      title: 'Black', 
      price: '990 Belt',
      emoji: '⚫'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h2>Biggest Offer Revealed</h2>
        <p>MORE DEALS INSIDE UP TO 50% OFF</p>
        <button 
          onClick={() => navigate('/deals')}
          style={{
            background: 'white',
            color: '#ff6b6b',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#f8f9fa';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Wishlist Now
        </button>
      </div>

      {/* Wishlist Section */}
      <div className="wishlist-section">
        <h3>Featured Collections</h3>
        <div className="wishlist-grid">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
              {item.badge && <span className="discount-badge">{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="deals-section">
        <div className="deals-header">
          <h3>Deals of the Day</h3>
          <DealTimer />
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;