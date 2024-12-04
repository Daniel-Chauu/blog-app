import { Request, Response } from 'express'
import { UserType } from '~/models/user.model'
import authService from '~/services/auth.service'
import { SignInRequestBody, SignUpRequestBody } from '~/types/request.type'

const authController = {
  signup: async (req: Request<any, any, SignUpRequestBody>, res: Response) => {
    const body = req.body
    const response = await authService.signup(body)
    res.json(response)
  },
  signin: async (req: Request<any, any, SignInRequestBody>, res: Response) => {
    const user = req.user as UserType
    const response = await authService.signin(user)
    res.json(response)
  }
}

export default authController
