import { checkSchema } from 'express-validator'
import { ErrorWithStatus } from '~/errors/errors'
import validate from '~/errors/validate'

export const userValidator = validate(checkSchema({}))
