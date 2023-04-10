import express from 'express';
import dotenv from 'dotenv';
import mailRouter from './routes/MailRoutes';
dotenv.config();

// Create a new instance of the MailService

// Create a new Express app
const app = express();

app.use('/api', mailRouter);

// Define a route that sends an email when it is called

const port = process.env.PORT || 3000;

// Start the app listening on the specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
