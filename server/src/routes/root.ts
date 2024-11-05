import { Router } from 'express'
import { errorHandler } from '~/errors/defaultErrorHandler'
import authRoute from './auth.route'

const rootRoute = Router()

rootRoute.use('/auth', authRoute)

rootRoute.use(errorHandler)

export default rootRoute
