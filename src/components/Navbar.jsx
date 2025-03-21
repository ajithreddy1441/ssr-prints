import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User } from 'lucide-react'; // Import User icon
import logo from '../assets/com-logo-removebg.png';
import { auth } from '../firebaseconfig'; // Import auth from Firebase config
import { signOut } from 'firebase/auth'; // Import signOut

export default function Navbar({ cartCount, favoritesCount, onCartClick, onFavoritesClick }) {
  const [user, setUser] = useState(null); // Track user state
  const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility

  // Track authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user if logged in
      } else {
        setUser(null); // Clear user if logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      setShowDropdown(false); // Hide dropdown
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-gray-900 fixed top-0 w-full z-20 h-18">
      <div className="absolute p-2 left-4 flex items-center">
        <img src={logo} className="w-16" alt="Logo" />
        <p className="ml-2 text-2xl font-bold text-white">SSR Prints</p>
      </div>
      <div className="flex justify-center py-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-6 absolute right-8 top-1.5 p-4">
        <button className="text-white hover:text-gray-600 relative" onClick={onFavoritesClick}>
          <Heart className="h-6 w-6" />
          {favoritesCount > 0 && (
            <span className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {favoritesCount}
            </span>
          )}
        </button>
        <button className="text-white hover:text-gray-600 relative" onClick={onCartClick}>
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        {user ? (
          // Show person icon and dropdown if user is logged in
          <div className="relative">
            <button
              className="text-white hover:text-gray-600"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <User className="h-6 w-6" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900">{user.displayName || "User"}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <button
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show login/signup button if user is not logged in
          <Link to="/login" className="text-white hover:text-gray-600">
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
}