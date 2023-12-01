import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Gender.module.scss';

type GenderProp = {
    setGenderFilter: Dispatch<SetStateAction<string | null>>
}

export const Gender = ({ setGenderFilter }: GenderProp) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null); 

  const handleGenderChange = (gender: string) => { 
    if (selectedGender === gender) {
      setSelectedGender(null);
      setGenderFilter(null);
    } else {
      setSelectedGender(gender);
      setGenderFilter(gender);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Gender:</p>
      <div className={styles.genders}>
        <div className={styles.row}>
          <input
            type="checkbox"
            id="manCheckbox"
            checked={selectedGender === 'men'}
            onChange={() => handleGenderChange('men')}
          />
          <label htmlFor="manCheckbox">Men</label>
        </div>
        <div className={styles.row}>
          <input
            type="checkbox"
            id="womenCheckbox"
            checked={selectedGender === 'women'}
            onChange={() => handleGenderChange('women')}
          />
          <label htmlFor="womenCheckbox">Women</label>
        </div>
      </div>
    </div>
  );
};
