import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import { Routes, Route } from 'react-router-dom';
import { LoginCreate, LoginFormCreate } from '../components/Login/LoginFormCreate';
import { LoginPasswordLost } from '../components/Login/LoginPasswordLost';
import loginImage from '../assets/login.jpg';
import styles from './Login.module.css'
import { TitleText } from '../components/Generic/TitleText';
import { Button } from '../components/Generic/Button';

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
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginFormCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>

      <section>
        <TitleText fontSize='medium' top={80} bottom={30}>Cadastre-se</TitleText>

        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button top={20}>Cadastro</Button>
      </section>
      </section>
    </section>
  )
}
