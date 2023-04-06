import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes'

const app = express();
const port = process.env.PORT || 3000;

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});