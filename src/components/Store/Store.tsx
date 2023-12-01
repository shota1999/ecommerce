import { Data } from './data';
import styles from './Store.module.scss';
import { ProductCard } from './ProductCard';





type storeProp = {
  genderFilter: string | null;
}

export const Store = ({genderFilter}:storeProp) => {
  



  const filteredData = genderFilter ? Data.filter((item) => item.gender === genderFilter) : Data;



  const totalQuantity = filteredData.length;

  

  return (
    <div className={styles.store}>
        <div>
        <p className={styles.totalQuantity}>{totalQuantity}  Product(s) found</p>
      </div>
    <div className={styles.container}>
      {filteredData.map((item) => (
        <ProductCard quantity={0} itemQuantityPrice={0} key={item.id} {...item} />
      ))}
    </div>
    </div>
  );
};
