import express from 'express'
import cors from 'cors'
import {setUp} from './db.js'
import linkRoute from './routes/link.js'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
setUp()

app.use(cors())
app.use(express.json())

app.use('/links', linkRoute)

app.get("/", (req, res) => {
    console.log("Here")
    res.send('Hi')
})


app.listen(port, ()=> {
    console.log(`Port: ${port}`)
})