import React from 'react';
import { X } from 'lucide-react';

export default function Cart({ cartItems, onClose, onRemove }) {
  return (
    <div className="fixed top-0 right-0 flex items-center justify-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" aria-label="Close cart">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-red-600 hover:text-red-800">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}
