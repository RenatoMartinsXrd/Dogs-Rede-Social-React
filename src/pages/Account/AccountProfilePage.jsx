import { Outlet } from 'react-router-dom'
import { NavbarProfile } from './components/NavbarProfile/NavbarProfile'

export const AccountProfilePage = () => {
  return (
    <section className="container">
      <NavbarProfile />
      <Outlet />
    </section>
  )
}
