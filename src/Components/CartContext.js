import React from "react";

let cart = [];
cart = localStorage.getItem("cart");
if (cart === null || cart.length === 0) {
  cart = [];
}
const CartContext = React.createContext({ cart: cart, setCart: () => {} });

export default CartContext;
