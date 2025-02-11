import express from 'express';
import { Request, Response } from 'express';
import blogsRoute from './routes/blogs.route';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
    }); 
    
app.use('/blogs', blogsRoute);

export default app;