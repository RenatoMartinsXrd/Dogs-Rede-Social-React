import React from 'react'
import styles from './SpinnerDog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

export const SpinnerDog = () => {
  return (
    <section className={styles.containerSpinnerDog}>
      <div className={styles.sppinerDog}>
        <FontAwesomeIcon icon={faDog} beat size="3x" />
      </div>
    </section>
  )
}
