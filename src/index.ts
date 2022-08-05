import 'dotenv/config'

import express from 'express'
import helmet from 'helmet'
import routes from './routes'

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())
app.use('/', routes)

app.listen(port, () => console.log(`🚀 server is running in ${port}`))
