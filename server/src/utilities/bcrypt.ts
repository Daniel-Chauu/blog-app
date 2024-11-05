import { compareSync, genSaltSync, hashSync } from 'bcryptjs'

export const hashedPassword = (password: string) => {
  const salt = genSaltSync(10)
  const hashed = hashSync(password, salt)
  return hashed
}

export const comparePassword = (password: string, hashedPassword: string) => {
  return compareSync(password, hashedPassword)
}
