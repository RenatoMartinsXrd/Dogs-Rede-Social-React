import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import { Routes, Route, Link } from 'react-router-dom';
import { LoginFormCreate } from '../components/Login/LoginFormCreate';
import { LoginPasswordLost } from '../components/Login/LoginPasswordLost';
import styles from './Login.module.css'

export const Login = () => {
  return (
    <section className={styles.containerLoginPage}>
      <section className={styles.containerContentLogin}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginFormCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>
      </section>
    </section>
  )
}
