import React from 'react'
import styles from './NavbarProfile.module.css'
import { TitleText } from '../ui/TitleText'
import { useMediaQuery } from 'react-responsive'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

export const NavbarProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: '768px' })

  return (
    <section className={styles.containerBoxNav}>
      <TitleText>Minha conta</TitleText>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </section>
  )
}
