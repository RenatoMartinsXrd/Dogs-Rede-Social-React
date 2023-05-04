import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import styles from './LoginForm.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Por favor insira um email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório')
})

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const loginSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <section>
      <form onSubmit={loginSubmit}>
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
        />
        <Button top={20}>Entrar</Button>
        {/* <Link to="/login/criar">
          <p>Cadastrar</p>
        </Link> */}
      </form>
    </section>
  )
}
