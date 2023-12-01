import React from 'react'
import styles from "./Footer.module.scss"
import { Button } from './button/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/ReduxStore'



type FooterProps = {
  GoToCheckoutPageClick:() => void
  isCheckoutPage:boolean
}

export const Footer = ({GoToCheckoutPageClick,isCheckoutPage}:FooterProps) => {
  const totalPrice = useSelector((state:RootState) => state.cart.totalprice)




  return (
    <div className={styles.container}>
   <div className={styles.row}>
    <p className={styles.title}>SUBTOTAL</p>
    <p className={styles.price}>$ {totalPrice}</p>
   </div>
   <Button isCheckoutPage={isCheckoutPage} GoToCheckoutPageClick={GoToCheckoutPageClick} />
    </div>
  )
}
