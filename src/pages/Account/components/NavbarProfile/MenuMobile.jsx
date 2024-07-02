import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavbarProfile.module.css'
import { Sling as Hamburger } from 'hamburger-react'
import FeedIcon from '../../../../assets/feed.svg'
import EstatisticaIcon from '../../../../assets/estatisticas.svg'
import PostarIcon from '../../../../assets/adicionar.svg'
import SairIcon from '../../../../assets/sair.svg'
import { Icon } from '../../../../components/ui/Icon'
import useAuth from '../../../../hooks/useAuth'

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false)
  const { mutationUserLogout } = useAuth()

  const handleMenu = () => {
    setOpen(false)
  }

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
        <nav className={styles.navContainerMobile} onClick={handleMenu}>
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

          <button onClick={mutationUserLogout.mutate}>
            <Icon icon={SairIcon} size="medium" />
            <p>Sair</p>
          </button>
        </nav>
      )}
    </section>
  )
}
