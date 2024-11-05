import { NextFunction, Request, Response } from 'express'
import { logError, omit } from '~/utilities/utils'
import { ErrorWithStatus } from './errors'
import HTTP_STATUS_CODE from '~/constants/httpStatusCode'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logError(err, req)
  if (err instanceof ErrorWithStatus) {
    res.status(err.status).json(err)
  }
  Object.getOwnPropertyNames(err).forEach((key) => {
    Object.defineProperty(err, key, { enumerable: true })
  })
  res.status(err.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    errorInfo: omit(err, 'stack')
  })
}
