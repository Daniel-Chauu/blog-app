import HTTP_STATUS_CODE from '~/constants/httpStatusCode'
import AUTH_MESSAGE from '~/messages/auth.message'

type ErrorsType = Record<
  string,
  {
    msg: string
    [key: string]: any
  }
>

class ErrorWithStatus {
  message: string
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    this.message = message
    this.status = status
  }
}

class Entity extends ErrorWithStatus {
  errors: ErrorsType
  constructor({
    message = AUTH_MESSAGE.VALIDATION_ERROR,
    status = HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY,
    errors
  }: {
    message?: string
    status?: number
    errors: ErrorsType
  }) {
    super({ message, status })
    this.errors = errors
  }
}

export { ErrorWithStatus, Entity }
