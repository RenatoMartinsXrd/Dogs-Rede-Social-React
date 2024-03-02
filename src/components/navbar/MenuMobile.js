import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import styles from './NavbarProfile.module.css'
import { Sling as Hamburger } from 'hamburger-react'
import { ReactComponent as FeedIcon } from '../../assets/feed.svg'
import { ReactComponent as EstatisticaIcon } from '../../assets/estatisticas.svg'
import { ReactComponent as PostarIcon } from '../../assets/adicionar.svg'
import { ReactComponent as SairIcon } from '../../assets/sair.svg'
import { useUserContext } from '../../contexts/UserContext'

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false)
  const { userLogout } = useUserContext()

  return (
    <section className={styles.containerBoxMenuMobile}>
      <section className={styles.containerHamburguer}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#fb1"
          duration={0.8}
        />
      </section>
      {isOpen && (
        <nav className={styles.navContainerMobile}>
          <NavLink to="/conta" end>
            <Icon icon={FeedIcon} size="medium" />
            <p>Minhas fotos</p>
          </NavLink>
          <NavLink to="/conta/estatisticas">
            <Icon icon={EstatisticaIcon} size="medium" />
            <p>Estatisticas</p>
          </NavLink>

          <NavLink to="/conta/postar">
            <Icon icon={PostarIcon} size="medium" />
            <p>Postar</p>
          </NavLink>

          <button onClick={userLogout}>
            <Icon icon={SairIcon} size="medium" />
            <p>Sair</p>
          </button>
        </nav>
      )}
    </section>
  )
}
