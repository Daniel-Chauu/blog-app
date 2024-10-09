import mongoose from 'mongoose'
import 'dotenv/config'

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('Connected to MongoDB successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
  }
}

export default connectToMongoDB
