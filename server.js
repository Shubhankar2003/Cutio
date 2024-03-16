import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.get("/", (req, res) => {
    console.log("Here")
    res.send('Hi')
})


app.listen(port, ()=> {
    console.log(`Port: ${port}`)
})