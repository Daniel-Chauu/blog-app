import { hashedPassword } from './../utilities/bcrypt'
import mongoose, { ObjectId, Schema } from 'mongoose'

export interface UserType {
  _id?: ObjectId
  username: string
  email: string
  password: string
}

const userSchema = new Schema<UserType>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  const newPassword = hashedPassword(this.password)
  this.password = newPassword
  next()
})

const User = mongoose.model<UserType>('User', userSchema)
export default User
