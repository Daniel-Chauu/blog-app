import express from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { Entity, ErrorWithStatus } from './errors'
import HTTP_STATUS_CODE from '~/constants/httpStatusCode'
import { checkEmptyObj } from '~/utilities/utils'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validation.run(req)
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const objectErrors = errors.mapped()
    const EntityErrors = new Entity({ errors: {} })
    const ErrorStatus = new ErrorWithStatus({ message: '', status: 400 })
    for (const key in objectErrors) {
      const { msg } = objectErrors[key]
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY) {
        ErrorStatus.message = msg.message
        ErrorStatus.status = msg.status
      } else {
        EntityErrors.errors[key] = objectErrors[key]
      }
    }
    if (checkEmptyObj(EntityErrors.errors)) return next(ErrorStatus)
    next(EntityErrors)
  }
}
