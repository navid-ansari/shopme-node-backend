export interface IUser {
  _id: string
  username: string
  email: string
  fname: string
  lname: string
  dob: string
  password: string
  role: role[]
  __v: number
}

interface role {
  label: string
  value: string
  code: number
}

type OmitProps = Omit<IUser, 'password'>
