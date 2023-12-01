import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  GoToCheckoutPageClick: () => void;
  isCheckoutPage: boolean;
};

export const Button = ({
  GoToCheckoutPageClick,
  isCheckoutPage,
}: ButtonProps) => {
  return (
    <div className={styles.container}>
      <button
        disabled={isCheckoutPage}
        onClick={GoToCheckoutPageClick}
        className={styles.btn}
      >
        CHECKOUT
      </button>
    </div>
  );
};
