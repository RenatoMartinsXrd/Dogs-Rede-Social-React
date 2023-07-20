import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as DogsIcon} from '../../assets/dogs.svg';
import { Icon } from './Icon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Icon icon={DogsIcon} size='medium'/>
      <small>Dogs. Alguns direitos reservados. ©</small>
    </footer>
  )
}
