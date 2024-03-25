import Header from "./components/Header";
import Cart from "./components/Cart";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgresContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgresContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgresContextProvider>
  );
}

export default App;
