import React from 'react';
import { X } from 'lucide-react';

export default function Favorites({ favoriteItems, onClose, onBuyNow, onRemove }) {
  return (
    <div className="fixed top-0 right-0 flex items-center justify-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" aria-label="Close favorites">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
        {favoriteItems.length === 0 ? (
          <p className="text-gray-600">You have no favorite items</p>
        ) : (
          <ul>
            {favoriteItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => onBuyNow(item)} className=" bg-blue-600 text-white w-20 rounded-md hover:bg-blue-700 transition-colors">Buy Now</button>
                  <button onClick={() => onRemove(item.id)} className="text-red-600 hover:text-red-800">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
