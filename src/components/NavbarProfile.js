import React from 'react'
import styles from './NavbarProfile.module.css'
import { TitleText } from './ui/TitleText'
import { NavLink } from 'react-router-dom'
import { Icon } from './ui/Icon'
import { ReactComponent as FeedIcon } from '../assets/feed.svg'
import { ReactComponent as EstatisticaIcon } from '../assets/estatisticas.svg'
import { ReactComponent as PostarIcon } from '../assets/adicionar.svg'
import { ReactComponent as SairIcon } from '../assets/sair.svg'

export const NavbarProfile = () => {
  return (
    <section className={styles.containerBoxNav}>
      <TitleText>Minha conta</TitleText>

      <nav className={styles.containerNav}>
        <NavLink to="/conta">
          <Icon icon={FeedIcon} size="medium" />
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Icon icon={EstatisticaIcon} size="medium" />
        </NavLink>

        <NavLink to="/conta/postar">
          <Icon icon={PostarIcon} size="medium" />
        </NavLink>

        <button>
          <Icon icon={SairIcon} size="medium" />
        </button>
      </nav>
    </section>
  )
}
