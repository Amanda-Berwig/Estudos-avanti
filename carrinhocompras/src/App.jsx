import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Product id={1} name="Produto 01" />
      <Product id={2} name="Produto 02" />
      <Cart />
    </CartProvider>
  );
}

export default App;
