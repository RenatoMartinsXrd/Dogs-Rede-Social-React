import * as yup from 'yup'

const schemaLogin = yup.object({
  username: yup.string().required('Username é obrigatório'),
  password: yup.string().required('Senha é obrigatório')
})

const schemaSignUp = yup.object({
  username: yup
    .string()
    .min(4, 'O usuário deve ter pelo menos 4 caracteres')
    .required('Username é obrigatório'),
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório')
})

const schemaPhotoPost = yup.object({
  nome: yup
    .string()
    .min(3, 'O nome de seu pet deve ter no minimo 3 caracteres')
    .required('Nome é obrigatório'),
  peso: yup
    .number()
    .typeError('Peso deve ser um valor numérico')
    .required('Peso é obrigatorio'),
  idade: yup
    .number()
    .typeError('Idade deve ser um valor numérico')
    .required('Idade é obrigatório'),
  img: yup
    .mixed()
    .test('required', 'A foto de seu pet é obrigatoria', (value) => {
      return value.length === 1
    })
})

export { schemaLogin, schemaSignUp, schemaPhotoPost }
