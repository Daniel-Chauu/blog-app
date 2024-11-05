import AUTH_MESSAGE from '~/messages/auth.message'
import User, { UserType } from '~/models/user.model'
import returnData from '~/utilities/returnData'

class AuthService {
  async signup({ email, password, username }: UserType) {
    const user = new User({ email, password, username })
    await user.save()

    return returnData(AUTH_MESSAGE.CREATED_USER_SUCCESSFULLY, user)
  }
}

const authService = new AuthService()

export default authService
