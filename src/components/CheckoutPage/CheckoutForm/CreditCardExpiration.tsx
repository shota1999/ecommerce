import React from "react";
import styles from "./CreditCardExpiration.module.scss";

type CreditCardExpirationProps = {
  register: any;
  name: string;
  validation: any;
};

export const CreditCardExpiration: React.FC<CreditCardExpirationProps> = ({
  register,
  name,
  validation,
}) => {
  return (
    <div className={styles.container}>
      <select {...register(`${name}.month`, { ...validation, required: true })}>
        <option value="">Month</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
            {String(i + 1).padStart(2, "0")}
          </option>
        ))}
      </select>
      <select {...register(`${name}.year`, { ...validation, required: true })}>
        <option value="">Year</option>
        {Array.from({ length: 10 }, (_, i) => {
          const year = new Date().getFullYear() + i;

          return (
            <option key={year} value={String(year).slice(-2)}>
              {String(year).slice(-2)}
            </option>
          );
        })}
      </select>
      
    </div>
  );
};
