import React from 'react'
import styles from './TitleText.module.css'

export const TitleText = ({children, left = 0, right = 0, top = 20, bottom = 20}) => {
  const style = {
    marginLeft: `${left}px`,
    marginRight: `${right}px`,
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`
  };

  return (
    <h1 className={styles.titleText} style={style}>{children}</h1>
  )
}
