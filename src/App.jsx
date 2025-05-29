import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import HomePage from "./components/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
