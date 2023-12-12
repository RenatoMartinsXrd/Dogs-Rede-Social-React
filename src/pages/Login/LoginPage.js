import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Generic/Button'
import { Input } from '../../components/Generic/Input'
import styles from './LoginPage.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TitleText } from '../../components/Generic/TitleText'
import { schemaLogin } from '../../validations/schemas'
import { useUserContext } from '../../contexts/UserContext'
import { SpinnerDog } from '../../components/SpinnerDog'
import { ContainerDog } from '../../components/ContainerDog'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schemaLogin)
  })

  const { loading, autoLogin, userLogin } = useUserContext()

  React.useEffect(() => {
    autoLogin()
  }, [autoLogin])

  async function loginSubmit({ username, password }) {
    await userLogin({ username, password })
  }

  return (
    <ContainerDog>
      <TitleText>Login</TitleText>

      <form onSubmit={handleSubmit(loginSubmit)}>
        {loading ? (
          <>
            <SpinnerDog />
            <Button top={20} disabled>
              Carregando...
            </Button>
          </>
        ) : (
          <>
            <Input
              name="username"
              placeholder="Digite seu usuário"
              register={register}
              error={errors.email?.message}
            />

            <Input
              name="password"
              customClass={styles.input}
              placeholder="Digite sua senha"
              register={register}
              error={errors.password?.message}
              type="password"
            />

            <Button top={20}>Entrar</Button>
          </>
        )}
      </form>

      <Link to="/login/perdeu" className={styles.perdeu}>
        <p>Perdeu a senha?</p>
      </Link>

      <section className={styles.containerCadastro}>
        <TitleText fontSize="medium" top={60} bottom={30}>
          Cadastre-se
        </TitleText>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className={styles.linkBtnCadastro}>
          <Button top={20}>Cadastro</Button>
        </Link>
      </section>
    </ContainerDog>
  )
}
