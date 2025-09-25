import express from 'express';
import giftsRouter from './routes/gifts.js'

const app = express();

app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.use('/gifts', giftsRouter)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
