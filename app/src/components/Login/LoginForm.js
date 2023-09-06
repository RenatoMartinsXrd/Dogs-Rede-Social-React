import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import styles from './LoginForm.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TitleText } from '../Generic/TitleText'
import { schemaLogin } from '../../validations/schemas'
import { AuthService } from '../../services/AuthService'
import { UserContext } from '../../contexts/UserContext'

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schemaLogin),
  });

  const userContext = useContext(UserContext);
  const { userLogin } = AuthService(userContext);

  async function loginSubmit({email, password}) {
    userLogin({email, password})
  };

  return (
    <section className={styles.containerSectionLoginForm}>
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

      <section className={styles.containerCadastro}>
        <TitleText fontSize='medium' top={60} bottom={30}>Cadastre-se</TitleText>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className={styles.linkBtnCadastro}>
          <Button top={20}>Cadastro</Button>
        </Link>
      </section>
    </section>
  )
}
