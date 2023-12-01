import React from 'react'
import styles from "./Button.module.scss"

type ButtonProp = {
  onClick:() => void
}


export const Button = ({onClick}:ButtonProp) => {
  return (
    <div>
        <button onClick={onClick} className={styles.btn}>Add to cart</button>
    </div>
  )
}
