import { Router } from 'express'
import userRoute from './user.route'
import { errorHandler } from '~/errors/defaultErrorHandler'

const rootRoute = Router()

rootRoute.use('/user', userRoute)

rootRoute.use(errorHandler)

export default rootRoute
