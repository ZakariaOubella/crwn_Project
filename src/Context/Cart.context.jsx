import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
});

// lli rajel i9lleb 3la lerror fin kayn ana ra tl3at lia error f dmaghi 😞 3la 9bel c sghira f children;

export const CartProvider = ({
  children /*hadi dima sghira c dima sghira*/,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
