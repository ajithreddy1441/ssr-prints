// src/App.jsx
import { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Slideshow from './components/SlideShow';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Favorites from './components/Favorites';
import './global.css';

const products = [
  { id: 1, name: "Classic White T-Shirt", price: "₹299", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 2, name: "Black Essential Tee", price: "₹299", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1" },
  { id: 3, name: "Navy Crew Neck", price: "₹299", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a" },
  { id: 4, name: "Gray Premium Tee", price: "₹399", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820" },
  { id: 5, name: "Classic White T-Shirt", price: "₹299", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 6, name: "Black Essential Tee", price: "₹299", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1" },
  { id: 7, name: "Navy Crew Neck", price: "₹299", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a" },
  { id: 8, name: "Gray Premium Tee", price: "₹399", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820" },
];

const images = [
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState('login'); // Define `setView`

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      newFavorites.delete(productId);
      return newFavorites;
    });
  };

  const toggleFavorite = (product) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(product.id)) {
        newFavorites.delete(product.id);
      } else {
        newFavorites.add(product.id);
      }
      return newFavorites;
    });
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setIsPaymentVisible(true);
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        favoritesCount={favorites.size}
        onLoginClick={() => setView('login')}
        onCartClick={() => setIsCartVisible(true)}
        onFavoritesClick={() => setIsFavoritesVisible(true)}
      />
      {isCartVisible && <Cart cartItems={cart} onClose={() => setIsCartVisible(false)} onRemove={removeFromCart} />}
      {isFavoritesVisible && <Favorites favoriteItems={[...favorites].map(id => products.find(p => p.id === id))} onClose={() => setIsFavoritesVisible(false)} onBuyNow={handleBuyNow} onRemove={removeFromFavorites} />}
      {isPaymentVisible && selectedProduct && <Payment product={selectedProduct} onClose={() => setIsPaymentVisible(false)} />}
      <Routes>
        <Route path="/login" element={<Login onSignUpClick={() => setView('signup')} />} />
        <Route path="/signup" element={<Signup onLoginClick={() => setView('login')} />} />
        <Route path="/" element={
          <>
            <Slideshow images={images} />
            <ProductCard
              products={products}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              onBuyNow={handleBuyNow}
            />
            <Founders />
            <Contact />
            <Footer />
            <Products
              products={products}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              onBuyNow={handleBuyNow}
            />
          </>
        } />
      </Routes>
    </Router>
  );
}