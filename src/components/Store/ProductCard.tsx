import styles from "./ProductCard.module.scss";
import { Button } from "./Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

type StoreItemProps = {
  id: number;
  name: string;
  price: string;
  img: string[];
  gender: string;
  itemQuantityPrice: number;
  quantity: number;
};

export const ProductCard = ({
  id,
  name,
  price,
  img,
  gender,
  itemQuantityPrice,
}: StoreItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
        img,
        gender,
        quantity: 1,
        itemQuantityPrice,
      })
    );
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img[1]} alt="" />
      <img className={`${styles.img} ${styles.img2}`} src={img[0]} alt="" />
      <p className={styles.name}>{name}</p>
      <div className={styles.footer}>
        <p className={styles.price}>$ {price}</p>
        <Button onClick={handleAddToCart} />
      </div>
    </div>
  );
};
