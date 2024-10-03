// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart, cartItems, removeFromCart }) => {

  const isInCart = cartItems.some((item) => item.id === product.id);

  // Handle cart toggle functionality
  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(product.id); // Remove product if it's already in the cart
    } else {
      addToCart(product); // Add product if it's not in the cart
    }
  };


  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-xs mx-auto"> {/* Adjust max width */}
      <div className="h-48 w-full flex items-center justify-center overflow-hidden"> {/* Fixed height for image container */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-contain" // Ensure the image maintains its aspect ratio
        />
        </div>
      <h2 className="font-bold text-lg mt-4 truncate">{product.title}</h2>
      <p className="text-sm mt-2 text-gray-600" line-clamp-2>
        {product.description.slice(0, 60)}...
      </p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>

      {/* Add to Cart / Remove from Cart button */}
      <button
        className={`mt-4 px-4 py-2 text-white ${isInCart ? 'bg-red-500' : 'bg-blue-500'} rounded-md`}
        onClick={handleCartToggle}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
