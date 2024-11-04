import HTTP_STATUS_CODE from '~/constants/httpStatusCode'

export class ErrorWithStatus {
  message: string
  status: number
  constructor(message: string, status: number) {
    this.message = message
    this.status = status
  }
}

type ErrorsType = Record<
  string,
  {
    msg: string
    [key: string]: any
  }
>

export class EntityError extends ErrorWithStatus {
  errors: ErrorsType
  constructor({
    errors,
    status = HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY,
    message = 'Validation error'
  }: {
    errors: ErrorsType
    status?: number
    message?: string
  }) {
    super(message, status)
    this.errors = errors
  }
}
