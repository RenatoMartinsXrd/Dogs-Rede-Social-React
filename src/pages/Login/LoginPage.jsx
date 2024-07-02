import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import styles from './LoginPage.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TitleText } from '../../components/ui/TitleText'
import { schemaLogin } from '../../validations/schemas'
import { SpinnerDog } from '../../components/ui/SpinnerDog'
import { ContainerDog } from '../../components/ContainerDog'
import { ErrorDog } from '../../components/ErrorDog'
import useAuth from '../../hooks/useAuth'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schemaLogin)
  })

  const { mutationUserLogin } = useAuth()

  async function loginSubmit({ username, password }) {
    mutationUserLogin.mutate({ username, password })
  }

  return (
    <ContainerDog>
      <TitleText>Login</TitleText>

      <form onSubmit={handleSubmit(loginSubmit)}>
        {mutationUserLogin.isPending ? (
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
              error={errors.username?.message}
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
        <ErrorDog>{mutationUserLogin.isError && 'Usuário inválido'}</ErrorDog>
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
