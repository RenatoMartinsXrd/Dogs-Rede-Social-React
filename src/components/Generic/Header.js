import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as LogoDogs } from '../../assets/dogs.svg'
import { ReactComponent as UsuarioIcon } from '../../assets/usuario.svg'
import { Icon } from './Icon'
import { useUserContext } from '../../contexts/UserContext'

export const Header = () => {
  const { userLogout, data } = useUserContext()

  return (
    <div className={styles.header}>
      <nav className={`container ${styles.navContainer}`}>
        <Link to="/">
          <Icon icon={LogoDogs} size="medium" />
        </Link>

        {data?.username ? (
          <div className={styles.buttonLoginIconContainer}>
            <Link to="/conta">
              <p>{data.username}</p>
              <Icon icon={UsuarioIcon} size="small" />
            </Link>
            <button onClick={userLogout}>sair</button>
          </div>
        ) : (
          <Link to="/login" className={styles.buttonLoginIconContainer}>
            <p>Login / Criar</p>
            <Icon icon={UsuarioIcon} size="small" />
          </Link>
        )}
      </nav>
    </div>
  )
}
