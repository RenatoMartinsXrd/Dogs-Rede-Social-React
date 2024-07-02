import styles from './Header.module.css'
import LogoDogs from '../assets/dogs.svg'
import UsuarioIcon from '../assets/usuario.svg'
import { Icon } from './ui/Icon'
import { UserContext } from '../contexts/UserContext'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export const Header = () => {
  const { data } = useContext(UserContext)
  const { mutationUserLogout } = useAuth()

  return (
    <div className={styles.header}>
      <nav className={`container ${styles.navContainer}`}>
        <Link to="/">
          <Icon icon={LogoDogs} size="medium" />{' '}
        </Link>

        {data?.username ? (
          <div className={styles.buttonLoginIconContainer}>
            <Link to="/conta" className={styles.buttonLoginIconContainer}>
              <p>{data?.username}</p>
              <Icon icon={UsuarioIcon} size="small" />
            </Link>
            <button onClick={mutationUserLogout.mutate}>sair</button>
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
