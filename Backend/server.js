import express from 'express';
import dotenv from 'dotenv';
import {connectDB } from './config/db.js';

dotenv.config(); 

const app = express();

app.get('/',(req,res) => {
    res.send('You did it Manu, Keep it up!');
})

console.log(process.env.MONGODB_URI);

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000');
});

//sGlMeOjNKVwi9swT