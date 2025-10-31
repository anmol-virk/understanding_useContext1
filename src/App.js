import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/cartContext";
import Nav from "./components/nav";
import CartStatus from "./components/CartStatus";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartStatus" element={<CartStatus />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
