import React from 'react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import styles from './SignUpPage.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TitleText } from '../../components/ui/TitleText'
import { schemaSignUp } from '../../validations/schemas'
import { useUserContext } from '../../contexts/UserContext'
import { SpinnerDog } from '../../components/ui/SpinnerDog'
import { ContainerDog } from '../../components/ContainerDog'
import { userPost } from '../../services/api'
import useApi from '../../hooks/useApi'
import { ErrorDog } from '../../components/ErrorDog'

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schemaSignUp)
  })

  const { requests, loading, error } = useApi()

  const { userLogin } = useUserContext()

  async function createLoginSubmit({ username, email, password }) {
    await requests([
      () => userPost({ username, email, password }),
      () => userLogin({ username, password })
    ])
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

            <Button top={20} bottom={20}>
              Cadastar
            </Button>
            <ErrorDog>{error?.message}</ErrorDog>
          </>
        )}
      </form>
    </ContainerDog>
  )
}
