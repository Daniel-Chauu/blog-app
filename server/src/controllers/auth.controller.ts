import { Request, Response } from 'express'
import authService from '~/services/auth.service'

const authController = {
  signup: async (req: Request, res: Response) => {
    const body = req.body
    const response = await authService.signup(body)
    res.json(response)
  }
}

export default authController
