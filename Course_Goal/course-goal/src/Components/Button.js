import React from 'react'
import styles from "../Styles/Button.module.css"

function Button(props) {
  return (
    <button type="submit" className={styles.button} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button
