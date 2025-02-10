import express from 'express';
import { Request, Response } from 'express';
import blogsRoute from './routes/blogs.route';
const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
    }); 
    
app.use('/blogs', blogsRoute);