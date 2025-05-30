import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://rgdemo1-f5c7f3awb6hvaqbm.canadacentral-01.azurewebsites.net/cart")
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error("Failed to load cart data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-lg font-medium text-gray-800">{item.name}</span>
                <span className="text-indigo-600 font-semibold">Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
