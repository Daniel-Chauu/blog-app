import { checkSchema } from 'express-validator'
import HTTP_STATUS_CODE from '~/constants/httpStatusCode'
import { ErrorWithStatus } from '~/errors/errors'
import { validate } from '~/errors/validate'
import AUTH_MESSAGE from '~/messages/auth.message'
import User from '~/models/user.model'

export const signupValidator = validate(
  checkSchema(
    {
      username: {
        notEmpty: {
          errorMessage: AUTH_MESSAGE.USERNAME_REQUIRED
        },
        custom: {
          options: async (value: string) => {
            const isExistUsername = await User.findOne({ username: value })
            if (isExistUsername)
              throw new ErrorWithStatus({
                message: AUTH_MESSAGE.USERNAME_ALREADY_EXISTS,
                status: HTTP_STATUS_CODE.BAD_REQUEST
              })
            return true
          }
        }
      },
      email: {
        notEmpty: {
          errorMessage: AUTH_MESSAGE.EMAIL_REQUIRED
        },
        custom: {
          options: async (value: string) => {
            const isExistEmail = await User.findOne({ email: value })
            if (isExistEmail)
              throw new ErrorWithStatus({
                message: AUTH_MESSAGE.EMAIL_ALREADY_EXISTS,
                status: HTTP_STATUS_CODE.BAD_REQUEST
              })
            return true
          }
        }
      },
      password: {
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
          },
          errorMessage: AUTH_MESSAGE.PASSWORD_STRONG
        }
      }
    },
    ['body']
  )
)
