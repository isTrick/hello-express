import express from 'express'
import bodyParser from 'body-parser'
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})