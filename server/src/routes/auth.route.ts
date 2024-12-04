import { Router } from 'express'
import authController from '~/controllers/auth.controller'
import { signinValidator, signupValidator } from '~/middlewares/auth.middleware'
import { wrapRequestHandler } from '~/utilities/handler'

const authRoute = Router()

authRoute.post('/sign-up', signupValidator, wrapRequestHandler(authController.signup))

authRoute.post('/sign-in', signinValidator, wrapRequestHandler(authController.signin))

export default authRoute
