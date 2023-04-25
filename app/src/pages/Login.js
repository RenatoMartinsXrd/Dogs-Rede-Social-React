import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import { Routes, Route } from 'react-router-dom';
import { LoginCreate } from '../components/Login/LoginCreate';
import { LoginPasswordLost } from '../components/Login/LoginPasswordLost';
import loginImage from '../assets/login.jpg';
import styles from './Login.module.css'
import { TitleText } from '../components/Generic/TitleText';

export const Login = () => {
  return (
    <section className={styles.containerLoginPage}>

      <section>
        <img
        className={styles.imgLogin}
        src={loginImage}
        alt='Imagem login dog'
        />
      </section>

      <section className={styles.containerContentLogin}>
        <TitleText>Login</TitleText>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>
      </section>
    </section>
  )
}
