import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import styles from './LoginForm.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { tokenPost, userGet  } from '../../services/api'
import { TitleText } from '../Generic/TitleText'


const schemaLogin = yup.object({
  email: yup
    .string()
    .required('Username é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatório')
})

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schemaLogin),
  });

  async function loginSubmit({email, password}) {
    const { token } = await tokenPost({
      username: email,
      password: password
    })

    const user = await userGet(token)
    console.log(user)
  };

  return (
    <section>

      <TitleText>Login</TitleText>

      <form onSubmit={handleSubmit(loginSubmit)}>
        <Input
          name="email"
          customClass={styles.inputLogin}
          placeholder="Digite seu usuário"
          register={register}
          error={errors.email?.message}
        />

        <Input
          name="password"
          customClass={styles.inputPassword}
          placeholder="Digite sua senha"
          register={register}
          error={errors.password?.message}
          type="password"
        />

        <Button top={20}>Entrar</Button>
      </form>

      <Link to="/login/perdeu" className={styles.perdeu}>
          <p>Perdeu a senha?</p>
      </Link>
    </section>
  )
}
