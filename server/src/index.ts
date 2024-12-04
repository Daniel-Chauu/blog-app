import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectToMongoDB from './connect'
import rootRoute from './routes/root'
connectToMongoDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

app.use('/api/v1', rootRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`)
})
