import express from 'express'
import { Request, Response } from 'express'
import path from 'path'

const server = express()

server.use('/static', express.static(path.join(__dirname, '../client')))

server.listen(ENV.PORT, () => {
   console.log(`Server listening on port ${ENV.PORT}`)
})

server.get('/', async (request: Request, response: Response) => {
   response.sendFile(path.resolve(__dirname, './index.html'))
})