require('dotenv').config()

const connectDB = require('./db/connect');
const User = require('./models/User')

const users = require('./sample_data.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await User.deleteMany();
        await User.create(users)
        console.log('Success!')
        process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

start()