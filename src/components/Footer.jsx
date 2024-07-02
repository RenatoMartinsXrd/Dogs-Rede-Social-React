import styles from './Footer.module.css'
// import DogsIcon from '../assets/dogs.svg'
import { Icon } from './ui/Icon'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Icon icon={DogsIcon} size="medium" /> */}
      <small>Dogs. Alguns direitos reservados. ©</small>
    </footer>
  )
}
