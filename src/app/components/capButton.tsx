'use client';

import { useState } from 'react';

export default function CurrencyToggle() {
  const [selectedCurrency, setSelectedCurrency] = useState('NOK');

  return (
    <div className="flex items-center justify-center">
      <div className=" flex rounded-full">
        <button
          className={`px-6 py-2 text-black font-medium transition-all duration-300 rounded-full ${
            selectedCurrency === 'NOK' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-black'
          }`}
          onClick={() => setSelectedCurrency('NOK')}
        >
          NOK
        </button>
        <button
          className={`px-6 py-2 text-black font-medium transition-all duration-300 rounded-full ${
            selectedCurrency === 'INR' ? 'bg-blue-900 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSelectedCurrency('INR')}
        >
          INR
        </button>
      </div>
    </div>
  );
}
