import express from 'express'
import mysql, { createConnection } from 'mysql2';

const app: express.Application = express()
const PORT: number = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', helloWorld)

app.listen(PORT, () => {
  console.log(`dev server running at: http://localhost:${PORT}/`)
})

async function helloWorld(_: express.Request, res: express.Response) {
  const connection = conn()
  connection.query("SELECT * FROM users;", (err, rows, _) => {
    if (err) throw err;
    res.status(200).send({message:rows})
  });
  connection.end();
}

function conn(): mysql.Connection {
  const connection = createConnection({
    host: "localhost",
    port: 33060,
    database: "db",
    user: "user",
    password: "password",
    multipleStatements: true,
  })

  return connection
}
