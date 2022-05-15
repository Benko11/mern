import express from 'express';
import { config } from 'dotenv';

config();
const app = express();

app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
