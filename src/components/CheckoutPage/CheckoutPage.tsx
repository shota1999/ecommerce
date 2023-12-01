
import styles from "./CheckoutPage.module.scss";
import { CheckoutForm } from "./CheckoutForm/CheckoutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type CheckoutPageProp = {
  onBackToCartClick: () => void;
  closeCheckoutBar:() => void
};

export const CheckoutPage = ({ onBackToCartClick,closeCheckoutBar }: CheckoutPageProp) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faX} className={styles.closeCheckout}  onClick={closeCheckoutBar}/>
      <div className={styles.header}>
        <h1>Payment</h1>
        <hr className={styles.line} />
      </div>
      <CheckoutForm  closeCheckoutBar={closeCheckoutBar} onBackToCartClick={onBackToCartClick} />
    </div>
  );
};
