import express from 'express';
import { Request, Response } from 'express';
import path from 'path';

const server = express();

server.use('/static', express.static(path.join(__dirname, '../client')));

server.listen(3000, () => {
   console.log('Server listening on port 3000');
});

server.get('/', async (request: Request, response: Response) => {
   response.sendFile(path.resolve(__dirname, './index.html'));
});

server.get('/ayo', async (request: Request, response: Response) => {
   response.json({
      hi: 'Hello World :)'
   })
});
