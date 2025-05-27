import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server running!');
}); 
