import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as LogoDogs} from '../../assets/dogs.svg';
import {ReactComponent as UsuarioIcon} from '../../assets/usuario.svg';
import { Icon } from './Icon';
import { UserContext} from '../../contexts/UserContext';

export const Header = () => {
  const userContext = React.useContext(UserContext)
  const {data} = userContext

  return (
    <div className={styles.header}>
      <nav className={`container ${styles.navContainer}`}>
        <Link to="/">
          <Icon icon={LogoDogs} size='medium'/>
        </Link>

        <Link to="/login" className={styles.buttonLoginIconContainer}>
          {data?.username? <p>{data.username}</p> : <p>Login / Criar</p> }
          <Icon icon={UsuarioIcon} size='small'/>
        </Link>
      </nav>
    </div>
  )
}
