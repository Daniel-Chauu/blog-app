import { Router } from 'express'
import authController from '~/controllers/auth.controller'
import { signupValidator } from '~/middlewares/auth.middleware'
import { wrapRequestHandler } from '~/utilities/handler'

const authRoute = Router()

authRoute.post('/signup', signupValidator, wrapRequestHandler(authController.signup))

export default authRoute
