import 'dotenv/config'
// import { resolve as pathResolve } from 'path'
import { Sequelize } from 'sequelize-typescript'
import models from './models/index.js'
import type { Dialect } from 'sequelize'

// const modelsPath = `${process.cwd()}/db/models/**/*.model.ts`
// const modelsPath = `${import.meta.dirname}/**/*.model.js`
// const modelsPath = `${import.meta.dirname}/models/*.model`
// const modelsPath = `${import.meta.dirname}/**/*.model.ts`
// const modelsPath = `${pathResolve(import.meta.dirname, '../../src/db/models')}/**/*.model.ts`
// const modelsPath = `${pathResolve(import.meta.dirname, '../../src/db')}/**/*.model.ts`
// console.log('modelsPath', modelsPath)

const sequelize = new Sequelize(
	process.env.DB_NAME as string,
	process.env.DB_USER as string,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
		dialect: process.env.DB_DRIVER as Dialect,
		logging: false,
		models: [...Object.values(models)],
		/**
		 * Не работает: пытается загрузить файлы без расширений в путях
		 */
		// models: [modelsPath],
		// modelMatch: (filename, member) => {
		// 	return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
		// }
	}
)

export {
  sequelize
}
