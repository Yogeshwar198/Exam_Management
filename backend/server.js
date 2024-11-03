import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import examsRoute from './routes/examsRoute.js'
import classesRoute from './routes/classesRoute.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB()


//middleware
app.use(express.json())
app.use(cors())
app.use('/api', examsRoute);
app.use('/api/classes', classesRoute);

//api endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log("Server started on PORT :" + port))