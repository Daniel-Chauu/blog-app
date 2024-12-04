import AUTH_MESSAGE from '~/messages/auth.message'
import User, { UserType } from '~/models/user.model'
import { SignInRequestBody, SignUpRequestBody } from '~/types/request.type'
import { signToken } from '~/utilities/jwt'
import returnData from '~/utilities/returnData'
import 'dotenv/config'

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY
const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN
class AuthService {
  generateAccessToken(user_id: string) {
    return signToken({
      payload: { user_id },
      privateKey: ACCESS_TOKEN_SECRET_KEY as string,
      options: { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    })
  }

  async signup({ email, password, username }: SignUpRequestBody) {
    const user = new User({ email, password, username })
    await user.save()
    return returnData(AUTH_MESSAGE.CREATED_USER_SUCCESSFULLY, user)
  }

  async signin(user: UserType) {
    const access_token = await this.generateAccessToken(user._id?.toString() as string)
    const { password, ...data } = user
    return returnData(AUTH_MESSAGE.SIGN_IN_SUCCESSFUL, { ...data, access_token })
  }
}

const authService = new AuthService()

export default authService
