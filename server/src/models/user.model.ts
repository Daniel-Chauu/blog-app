import mongoose, { Schema } from 'mongoose'

export interface User {
  username: string
  password: string
}

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
})

const User = mongoose.model<User>('User', userSchema)
export default User
