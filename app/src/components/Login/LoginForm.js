import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
  return (
    <section>
      <form>
        <Input
          name="login"
          customClass={styles.inputLogin}
          placeholder="Digite seu usuário"
        />
        <Input
          name="password"
          customClass={styles.inputPassword}
          placeholder="Digite sua senha"
        />
        <Button top={20}>Entrar</Button>
        {/* <Link to="/login/criar">
          <p>Cadastrar</p>
        </Link> */}
      </form>
    </section>
  )
}
