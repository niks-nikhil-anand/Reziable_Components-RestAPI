const mongoose = require('mongoose')
import { DB_NAME } from '../constant'

export const connectDB = async() =>{
    try {
        const connectionSring = `{process.env.MONGODB_URI} ${DB_NAME}`
        const connectionInstance = await mongoose.connect(connectionSring)
        console.log(`\n MongoDB connected!! \n DB-HOST:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed" , error)
    }
}

