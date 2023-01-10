import React from 'react'
import styles from './Button.module.scss'

export default function Button({ children }) {
  return (
    <button className={styles.Button}>{children}</button>
  )
}
