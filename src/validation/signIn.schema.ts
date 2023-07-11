import { object, string, ref } from 'yup'

const signInSchema = object({
  body: object({
    email: string().required('Email is required'),
    password: string().required('Password is required')
  })
})

export { signInSchema }
