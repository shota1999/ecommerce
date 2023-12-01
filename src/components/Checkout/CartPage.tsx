import styles from './CartPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import emptyCart from './img/empty_cart.png';
import { Footer } from './Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/ReduxStore';
import { Cart } from './Cart';
import { useState } from 'react';
import { CheckoutPage } from '../CheckoutPage/CheckoutPage';

type checkoutProp = {
  closeCheckoutBar: () => void;
};

export const CartPage = ({ closeCheckoutBar }: checkoutProp) => {
  const cart = useSelector((state: RootState) => state.cart);
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);

  const GoToCheckoutPageClick = () => {
    if (cart.items.length === 0) {
      return;
    }
    setIsCheckoutPage(true);
  };

  return (
    <>
      <div className={`${styles.checkoutBar} ${isCheckoutPage ? styles.open : ""}`}>
        {isCheckoutPage ? (
          <CheckoutPage onBackToCartClick={() => setIsCheckoutPage(false)} closeCheckoutBar={closeCheckoutBar} />
        ) : (
          <>
            <FontAwesomeIcon icon={faX} className={styles.close} onClick={closeCheckoutBar} />
            <div className={styles.container}>
              <div className={styles.header}>
                <FontAwesomeIcon className={styles.icon} icon={faCartShopping} style={{ color: '#d5d6d8' }} />
                <p className={styles.quantity}>{cart.items.length}</p>
                <p className={styles.headerTitle}>Cart</p>
              </div>
              <div className={styles.products}>
                {cart.items.length === 0 ? (
                  <img className={styles.emptyCartIcon} src={emptyCart} alt='' />
                ) : (
                  cart.items.map((item, index) => (
                    <Cart key={index} name={item.name} price={item.price} gender={item.gender} img={item.img} id={item.id} quantity={item?.quantity} itemQuantityPrice={item?.itemQuantityPrice} />
                  ))
                )}
              </div>
            </div>
            <Footer GoToCheckoutPageClick={GoToCheckoutPageClick} isCheckoutPage={isCheckoutPage} />
          </>
        )}
      </div>
    </>
  );
};