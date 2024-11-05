import express from 'express'
import { body, validationResult, ContextRunner, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { EntityError, ErrorWithStatus } from './errors'
import HTTP_STATUS_CODE from '~/constants/httpStatusCode'
import { checkEmptyObj } from '~/utilities/utils'

// can be reused by many routes
const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // sequential processing, stops running validations chain if one fails.
    await validation.run(req)
    const errors = validationResult(req)
    if (errors.isEmpty()) return next()
    const errorsObject = errors.mapped()
    const entityErrors = new EntityError({ errors: {} })
    const errorStatus = new ErrorWithStatus('', HTTP_STATUS_CODE.BAD_REQUEST)

    for (const key in errorsObject) {
      const { msg } = errorsObject[key]
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY) {
        errorStatus.message = msg.message
        errorStatus.status = msg.status
      } else {
        entityErrors.errors[key] = errorsObject[key]
      }
    }
    if (checkEmptyObj(entityErrors.errors)) return next(errorStatus)
    next(entityErrors)
  }
}

export default validate
