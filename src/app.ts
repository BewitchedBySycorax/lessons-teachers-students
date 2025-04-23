import express from 'express'
import { Op } from 'sequelize'
import { sequelize } from './db/connection.js'
import models from './db/models/index.js'
import type { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())

app.get('/lessons', async (req: Request, res: Response): Promise<void> => {
  try {
    const { date, status, teacherIds, studentsCount, page = 1, lessonsPerPage = 5 } = req.query

    const where: any = {}
    if (date) {
      const dates = (date as string).split(',')
      if (dates.length === 1) {
        where.date = dates[0]
      } else if (dates.length === 2) {
        where.date = { [Op.between]: dates }
      }
    }
    if (status) {
      where.status = Number(status)
    }

    const offset = (Number(page) - 1) * Number(lessonsPerPage)
    const limit = Number(lessonsPerPage)

    const lessons = await models.Lesson.findAll({
      where,
      include: [
        {
          model: models.Teacher,
          through: { attributes: [] },
        },
        {
          model: models.Student,
          through: { attributes: ['visit'] },
        },
      ],
      offset,
      limit,
    })

    res.status(200).json(lessons)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
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
