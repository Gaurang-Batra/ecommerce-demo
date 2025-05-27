import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://tse4.mm.bing.net/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$79",
    image: "https://tse2.mm.bing.net/th/id/OIP.rNxkdzB6EsyKwx3tG_OZvAHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$49",
    image: "https://i5.walmartimages.com/asr/2359c3f8-611d-40c4-88ab-49d4695dfd5f.5b26b18ccda9066176d9e3346f969843.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Shop</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to ShopEase</h2>
        <p className="text-lg">Your one-stop shop for all tech gadgets</p>
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h4>
              <p className="text-indigo-600 font-semibold">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 shadow-inner mt-10">
        <p className="text-gray-500">&copy; 2025 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
