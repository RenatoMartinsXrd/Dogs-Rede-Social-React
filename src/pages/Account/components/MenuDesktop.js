import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as FeedIcon } from '../../../assets/feed.svg'
import { ReactComponent as EstatisticaIcon } from '../../../assets/estatisticas.svg'
import { ReactComponent as PostarIcon } from '../../../assets/adicionar.svg'
import { ReactComponent as SairIcon } from '../../../assets/sair.svg'
import styles from './NavbarProfile.module.css'
import { useUserContext } from '../../../contexts/UserContext'
import { Icon } from '../../../components/ui/Icon'

export const MenuDesktop = () => {
  const { userLogout } = useUserContext()
  return (
    <nav className={styles.containerNavDesktop}>
      <NavLink to="/conta" end>
        <Icon icon={FeedIcon} size="medium" />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Icon icon={EstatisticaIcon} size="medium" />
      </NavLink>

      <NavLink to="/conta/postar">
        <Icon icon={PostarIcon} size="medium" />
      </NavLink>

      <button onClick={userLogout}>
        <Icon icon={SairIcon} size="medium" />
      </button>
    </nav>
  )
}
