import express from 'express'

const app: express.Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_: express.Request, res: express.Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

app.listen(PORT, () => {
  console.log(`dev server running at: http://localhost:${PORT}/`)
})
