import React from 'react'
import { Button } from '../../components/Generic/Button'
import { Input } from '../../components/Generic/Input'
import styles from './SignUpPage.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TitleText } from '../../components/Generic/TitleText'
import { schemaSignUp } from '../../validations/schemas'
import { useUserContext } from '../../contexts/UserContext'
import { SpinnerDog } from '../../components/SpinnerDog'
import { ContainerDog } from '../../components/ContainerDog'
import { userPost } from '../../services/api'

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schemaSignUp)
  })

  const { loading, userLogin } = useUserContext()

  async function createLoginSubmit({ username, email, password }) {
    await userPost({
      username,
      email,
      password
    })
    await userLogin({ username, password })
  }

  return (
    <ContainerDog>
      <TitleText>Cadastre-se</TitleText>

      <form onSubmit={handleSubmit(createLoginSubmit)}>
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
              placeholder="Digite um usuário"
              register={register}
              error={errors.username?.message}
            />

            <Input
              name="email"
              customClass={styles.input}
              placeholder="Digite um email"
              register={register}
              error={errors.email?.message}
            />

            <Input
              name="password"
              customClass={styles.input}
              placeholder="Digite uma senha"
              register={register}
              error={errors.password?.message}
              type="password"
            />

            <Button top={20}>Cadastar</Button>
          </>
        )}
      </form>
    </ContainerDog>
  )
}
