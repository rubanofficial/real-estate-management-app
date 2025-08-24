import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoute from './routes/UserRouter.js';
import propertyRoute from './routes/propertyRouter.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use('/api', propertyRoute);


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();
});
