import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())

app.get('/', (_req: Request, res: Response): void => {
  res.status(200).send({ message: `Initial server state.` })
})

export {
  app
}
