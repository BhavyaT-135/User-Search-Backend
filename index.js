const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./db/connect')
const userRoute = require('./routes/users')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.use('/api/v1/users', userRoute)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is running on port ${port}...`))
  }
  catch (error) {
    console.log(error)
  }
}

start()

module.exports = app;
