import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { formFields } from "./FormFields";
import styles from "./CheckoutForm.module.scss";
import { CreditCardExpiration } from "./CreditCardExpiration";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../Redux/CartSlice";
import { RootState } from "../../Redux/ReduxStore";

type CheckoutFormProp = {
  onBackToCartClick: () => void;
  closeCheckoutBar: () => void;
};

export const CheckoutForm = ({
  onBackToCartClick,
  closeCheckoutBar,
}: CheckoutFormProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const totalAmount = cart.totalprice;

  const onSubmit = async (data: FieldValues) => {
    const { expiration} = data;
  
    if (!expiration.month || !expiration.year) {
      
   
    }
  
    alert(`Payment processed successfully. Total Paid: $${totalAmount}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  
    cart.items.forEach((item) => {
      dispatch(deleteCart(item.id));
    });
    closeCheckoutBar();
  };

  const handleNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
    const cleanedValue = e.currentTarget.value.replace(/[^0-9]/g, "");

    const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ");

    e.currentTarget.value = formattedValue;
  };

  const handleTextInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z]/g, "");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <div key={field.name} className={styles.container}>
            <div className={styles.column}>
              <label className={styles.label} htmlFor={field.name}>
                {field.label}
              </label>
            
              {field.type === "select" ? (
                <CreditCardExpiration
                  register={register}
                  name={field.name}
                  validation={field.validation}
                />
              
              ) : (
                <input
                  id={field.name}
                  type={field.type === "password" ? "password" : "text"}
                  maxLength={
                    field.name === "cvv"
                      ? 3
                      : field.name === "cardNumber"
                      ? 20
                      : undefined
                  }
                  {...register(field.name, field.validation)}
                  placeholder={field.placeHolder}
                  onInput={
                    field.type === "numbers" || field.type === "password"
                      ? handleNumberInput
                      : field.type === "letters"
                      ? handleTextInput
                      : undefined
                  }
                />
              )}
              {errors[field.name] && errors[field.name]?.message && (
                <p className={styles.error}>{`${
                  errors[field.name]?.message
                }`}</p>
              )}
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          <p onClick={onBackToCartClick}>Go Back</p>
          <button type="submit" disabled={isSubmitting}>
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};
