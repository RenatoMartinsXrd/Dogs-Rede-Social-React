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

export { schemaLogin, schemaSignUp }
