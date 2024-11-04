import { Router } from 'express'
import { userValidator } from '~/middlewares/user.middleware'

const userRoute = Router()

userRoute.post('/', userValidator, async (req, res) => {
  res.json('API is working')
})

export default userRoute
