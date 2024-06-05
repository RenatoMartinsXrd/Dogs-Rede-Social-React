import React from 'react'
import { Button } from '../../../../components/ui/Button'
import { SpinnerDog } from '../../../../components/ui/SpinnerDog'
import { Input } from '../../../../components/ui/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorDog } from '../../../../components/ErrorDog'
import { photoPost } from '../../../../services/api'
import { objectToFormData } from '../../../../utils/utils'
import { schemaPhotoPost } from '../../../../validations/schemas'
import styles from './AccountPostPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

export const AccountPostPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schemaPhotoPost)
  })

  const watchPhotoPreview = watch('img')
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate()

  const mutationPhotoPost = useMutation({
    mutationFn: ({ formData, token }) => photoPost(formData, token),
    onSuccess: () => {
      navigate('/conta')
    }
  })

  async function createPhotoPost(values) {
    const formData = objectToFormData(values)
    mutationPhotoPost.mutate({ formData, token })
  }

  const isPhotoPreview = () => {
    return getValues('img')?.length === 1
  }

  const getUrlPhotoPreview = () => {
    const file = watchPhotoPreview[0]
    return URL.createObjectURL(file)
  }

  return (
    <section className={styles.containerAccountPost}>
      <form onSubmit={handleSubmit(createPhotoPost)}>
        {mutationPhotoPost.isPending ? (
          <>
            <SpinnerDog />
            <Button top={20} disabled>
              Carregando...
            </Button>
          </>
        ) : (
          <>
            <Input
              name="nome"
              placeholder="Digite o nome do animalzinho"
              register={register}
              error={errors.nome?.message}
            />
            <Input
              name="peso"
              placeholder="Digite o peso do animalzinho"
              register={register}
              error={errors.peso?.message}
            />
            <Input
              name="idade"
              placeholder="Digite a idade do animalzinho"
              register={register}
              error={errors.idade?.message}
              type="number"
            />
            <Input
              name="img"
              register={register}
              error={errors.img?.message}
              type="file"
            />
            <Button top={20} bottom={20}>
              Enviar
            </Button>

            <ErrorDog>
              {mutationPhotoPost?.error?.response?.data?.message}
            </ErrorDog>
          </>
        )}
      </form>

      <section className={styles.containerPreview}>
        {isPhotoPreview() ? (
          <img src={getUrlPhotoPreview()} alt="preview profile" />
        ) : (
          <div className={styles.hiddenProfilePreview}>
            <FontAwesomeIcon icon={faDog} size="5x" color="grey" />
          </div>
        )}
      </section>
    </section>
  )
}
