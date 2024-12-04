import Request from 'express'
import { UserType } from './models/user.model'

declare module 'express' {
  interface Request {
    user?: UserType
  }
}
