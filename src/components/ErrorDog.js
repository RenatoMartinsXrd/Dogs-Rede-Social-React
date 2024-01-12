import React from 'react'
import styles from './ErrorDog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

export const ErrorDog = ({ children }) => {
  if (children)
    return (
      <section className={styles.containerError}>
        <FontAwesomeIcon icon={faDog} color="red" />
        <p>{children}</p>
      </section>
    )
}
