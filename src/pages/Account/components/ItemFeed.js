import React from 'react'
import styles from './ItemFeed.module.css'

export const ItemFeed = ({ src }) => {
  return (
    <section className={styles.containerItem}>
      <img src={src} alt="" />
    </section>
  )
}
