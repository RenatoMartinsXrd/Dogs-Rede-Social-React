import React from 'react'
import styles from './NavbarProfile.module.css'
import { useMediaQuery } from 'react-responsive'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'
import { NAVBAR_TITLE_LIST } from '../../../../constants/navbar-title-list'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../../../../constants/app-routes'
import { TitleText } from '../../../../components/ui/TitleText'

export const NavbarProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: '768px' })
  const navbarListTitles = NAVBAR_TITLE_LIST
  const { pathname } = useLocation()

  const getTitleOfRoute = () => {
    const indexTitle = APP_ROUTES.private.conta.indexOf(pathname)
    return navbarListTitles[indexTitle]
  }

  return (
    <section className={styles.containerBoxNav}>
      <TitleText>{getTitleOfRoute()}</TitleText>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </section>
  )
}
