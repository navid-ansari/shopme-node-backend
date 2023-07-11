import { object, string, ref } from 'yup'

const signUpSchema = object({
  body: object({
    username: string().required('Username is required'),
    email: string().required('Email is required'),
    fname: string().required('First name is required'),
    lname: string().required('Last name is required'),
    dob: string().required('Date of birth is required'),
    password: string().required('Password is required'),
    role: string().required('Role is required')
  })
})

export { signUpSchema }
