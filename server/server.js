import express from 'express';

const app = express();

app.use('/public', express.static('./public'))



