import { X } from 'lucide-react';
import React from 'react';

export default function Payment({ product, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" aria-label="Close payment">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="text-gray-600 mb-4">Proceed with payment for {product.name} costing {product.price}.</p>
        {/* Add your payment form and logic here */}
      </div>
    </div>
  );
}
