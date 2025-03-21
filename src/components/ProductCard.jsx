import React from 'react';
import { Heart } from 'lucide-react';

export default function ProductCard({ products, addToCart, toggleFavorite, favorites, onBuyNow }) {
  const handleFavoriteClick = (product) => {
    toggleFavorite(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 pt-10 pb-12">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-12 underline">Choose Your Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-[100%]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute h-full w-full object-cover"
              />
              <button 
                onClick={() => handleFavoriteClick(product)} 
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100" 
                aria-label={`Favorite ${product.name}`} > 
                <Heart
                  className={`h-5 w-5 ${favorites.has(product.id) ? "text-red-500 fill-current" : "text-gray-400"}`} 
                /> 
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => onBuyNow(product)}
                  className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="w-1/2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
