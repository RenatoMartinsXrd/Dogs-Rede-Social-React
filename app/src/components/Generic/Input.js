import React from 'react'
import styles from './Input.module.css'

export const Input = ({name, type, customClass, isReplaceStyle = false, ...props}) => {

  return (
    <input
      name={name} type={type}
      className={isReplaceStyle? customClass : `${styles.input} ${customClass}` }
      {...props}
    />
  )
}
