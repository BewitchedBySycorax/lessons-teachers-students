import express from 'express'
import { sequelize } from './db/connection.js'
import type { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())

app.get('/lessons', (_req: Request, res: Response): void => {
  // TODO:
  res.status(200).send({ message: `Lessons info here.` })
})

app.use((_req: Request, res: Response): void => {
  res.status(404).json({ error: 'Страница не найдена!' })
})

;(async (): Promise<void> => {
	try {
		await sequelize.sync() // https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
    await sequelize.authenticate() // https://sequelize.org/docs/v6/getting-started/#testing-the-connection
    console.log('Connection has been established successfully.')
	} catch (e) {
		console.error(e)
    await sequelize.close()
    process.exit(1)
	}
})()

export {
  app
}
