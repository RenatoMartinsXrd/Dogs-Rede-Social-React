import React from 'react'
import styles from './Button.module.css'

export const Button = ({customClass, isReplaceStyle = false, children, left, right, top, bottom, ...props}) => {

  const style = {
    marginLeft: `${left}px`,
    marginRight: `${right}px`,
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`
  };

  return (
    <button
      className={isReplaceStyle? customClass : `${styles.button} ${customClass}` }
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}
