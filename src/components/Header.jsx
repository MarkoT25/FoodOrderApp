import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgresContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgresContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleCartClick() {
    progressCtx.showCart();
    console.log("awdas");
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food logo" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleCartClick}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
