import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as LogoDogs} from '../assets/dogs.svg';
import {ReactComponent as UsuarioIcon} from '../assets/usuario.svg';
import { Icon } from './Icon';

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`container ${styles.navContainer}`}>
        <Link to="/">
          <Icon icon={LogoDogs} size='medium'/>
        </Link>

        <Link to="/" className={styles.buttonLoginIconContainer}>
          <p>Login / Criar</p>
          <Icon icon={UsuarioIcon} size='small'/>
        </Link>
      </nav>
    </div>
  )
}
