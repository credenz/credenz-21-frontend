import React from "react";

let cart = [];
let cartModal = false;
cart = localStorage.getItem("cart");
if (cart === null || cart.length === 0) {
  cart = [];
}
const CartContext = React.createContext({
  cart: cart,
  setCart: () => {},
  cartModal: cartModal,
  setCartModal: () => {},
  userDetails: {},
  setUserDetails: () => {},
  userProfile: {},
  setUserProfile: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  UPIModal: false,
  setUPIModal: () => {},
});

export default CartContext;
