import React, { useState } from "react";
import styles from "./App.module.scss";
import { Store } from "./components/Store/Store";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { CartPage } from "./components/Checkout/CartPage";
import { Gender } from "./components/Gender/Gender";

export const App = () => {
  const [isCartPageOpen, setIsCartPageOpen] = useState(false);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  const openCheckoutBar = () => {
    setIsCartPageOpen(true);
  };

  const closeCheckoutBar = () => {
    setIsCartPageOpen(false);
  };

  return (
    <div className={styles.container}>
      <Gender setGenderFilter={setGenderFilter} />
      <Store genderFilter={genderFilter} />
      <ShoppingCart openCheckoutBar={openCheckoutBar} />
      {isCartPageOpen ? <CartPage closeCheckoutBar={closeCheckoutBar} /> : null}
    </div>
  );
};
