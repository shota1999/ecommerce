import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./ShoppingCart.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/ReduxStore"; 

type ShoppingCartProp = {
  openCheckoutBar: () => void;
}

export const ShoppingCart = ({ openCheckoutBar }: ShoppingCartProp) => {
  const cart = useSelector((state: RootState) => state.cart);

  const totalQuantity = cart.items.length;

  return (
    <div className={styles.container} onClick={openCheckoutBar}>
      <FontAwesomeIcon className={styles.icon} icon={faCartShopping} style={{ color: "#d5d6d8" }} />
      <p className={styles.quantity}>{totalQuantity}</p>
    </div>
  );
};
