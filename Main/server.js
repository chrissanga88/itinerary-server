import express from 'express';

// uses port assigned by hosting provider (Heroku) or falls back to default 3001 if run locally
const PORT = process.env.PORT || 3001;

const app = express();

