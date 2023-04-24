const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/connect')

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World")
})

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

