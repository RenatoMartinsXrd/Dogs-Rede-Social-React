import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarProfile } from '../../components/navbar/NavbarProfile'

export const AccountProfilePage = () => {
  return (
    <section className="container">
      <NavbarProfile />
      <Outlet />
    </section>
  )
}
