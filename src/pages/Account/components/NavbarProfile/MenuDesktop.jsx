import { NavLink } from 'react-router-dom'
import FeedIcon from '../../../../assets/feed.svg'
import EstatisticaIcon from '../../../../assets/estatisticas.svg'
import PostarIcon from '../../../../assets/adicionar.svg'
import SairIcon from '../../../../assets/sair.svg'
import styles from './NavbarProfile.module.css'
import { Icon } from '../../../../components/ui/Icon'
import useAuth from '../../../../hooks/useAuth'

export const MenuDesktop = () => {
  const { mutationUserLogout } = useAuth()
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

      <button onClick={mutationUserLogout.mutate}>
        <Icon icon={SairIcon} size="medium" />
      </button>
    </nav>
  )
}
