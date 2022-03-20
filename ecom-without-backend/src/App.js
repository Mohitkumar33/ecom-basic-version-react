import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Signup } from "./pages/Signup";
import { Wishlist } from "./pages/Wishlist";
import { GlobalProvider } from "./contexts/Provider";
const App = () => {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </GlobalProvider>
  );
};

export default App;
