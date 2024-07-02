import styles from './TitleText.module.css'

function capitalizeFirstLetter(string) {
  return string.replace(/^\w/, (c) => c.toUpperCase())
}

export const TitleText = ({
  children,
  left = 0,
  right = 0,
  top = 20,
  bottom = 20,
  fontSize = 'large'
}) => {
  const style = {
    marginLeft: `${left}px`,
    marginRight: `${right}px`,
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`
  }

  const prepareClass = (name, value) => {
    return `${name}${capitalizeFirstLetter(value)}`
  }

  const classes = `${styles.titleText} ${
    styles[prepareClass('fontSize', fontSize)]
  }`

  return (
    <h1 className={classes} style={style}>
      {children}
    </h1>
  )
}
