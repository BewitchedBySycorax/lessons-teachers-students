import 'dotenv/config'
import { app } from './app.js'

if (process.env.NODE_ENV !== 'production') {
	process.on('unhandledRejection', (reason, _promise) => {
		console.error('Unhandled Rejection:', reason)
	})

	process.on('uncaughtException', (e) => {
		console.error('Uncaught Exception:', e)
	})
}

const startServer = async (): Promise<void> => {
	try {
		const PORT = Number(process.env.PORT) || 12804

		app.listen(
			PORT,
			process.env.NODE_ENV !== 'production' ? '0.0.0.0' : '127.0.0.1',
			() => console.log(`Server started on port ${PORT}`)
		)
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}

startServer()
