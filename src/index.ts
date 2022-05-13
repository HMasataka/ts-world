import express from 'express'

const app: express.Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', helloWorld)

app.listen(PORT, () => {
  console.log(`dev server running at: http://localhost:${PORT}/`)
})

async function helloWorld(_: express.Request, res: express.Response) {
  res.status(200).send({
    message: 'Hello,World!',
  })
}
