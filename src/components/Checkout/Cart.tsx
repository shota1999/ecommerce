import { ReactNode, } from 'react';
import { useDispatch,  } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {  decreaseQuantity, deleteCart, increaseQuantity,  } from '../Redux/CartSlice';
import styles from './Cart.module.scss';


type CartItemProps = {
  id: number;
  name: string;
  price: string;
  img: string[];
  gender: ReactNode;
  quantity: number;
  itemQuantityPrice: number;
};

export const Cart = ({ id, name,  img, gender, quantity, itemQuantityPrice,price }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id, quantity,price }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id, quantity,price }));
  };

  const handleDeleteCart = () => {
    dispatch(deleteCart(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.productBorder}></div>
      <div className={styles.productDetails}>
        <img src={img[1]} alt='' className={styles.productImg} />
        <div className={styles.info}>
          <div className={styles.row}>
            <p className={styles.name}>{name}</p>
            <FontAwesomeIcon className={styles.removeButton} icon={faXmark} onClick={handleDeleteCart} />
          </div>
          <div className={styles.row}>
            <p className={styles.gender}>Gender: {gender}</p>
            <p className={styles.price}>${itemQuantityPrice}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.quantity}>Quantity: {quantity}</p>
            <div className={styles.buttons}>
              <button className={quantity === 1 ? styles.grayDecrease : styles.decrease} onClick={handleDecreaseQuantity}>
                -
              </button>
              <button className={styles.increase} onClick={handleIncreaseQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};