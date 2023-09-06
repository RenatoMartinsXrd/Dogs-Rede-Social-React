import * as yup from 'yup'

const schemaLogin = yup.object({
  email: yup
    .string()
    .required('Username é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatório')
})

export {
  schemaLogin
}
