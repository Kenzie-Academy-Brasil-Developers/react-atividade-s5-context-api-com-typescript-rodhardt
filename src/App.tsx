import "./App.css";

import ProductsList from "./components/ProductsList";
import products from "./assets/productsAvailable/index";

import { useCart } from "./Providers/Cart";

function App() {
  const { cart } = useCart();

  return (
    <div className="App">
      <ProductsList list={products} isCart={false} />
      <ProductsList list={cart} isCart={true} />
    </div>
  );
}

export default App;
