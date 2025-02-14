import express from 'express';
import { Request, Response } from 'express';
import v1Router from './routes/v1';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
    }); 
    
app.use('/v1', v1Router);

export default app;
