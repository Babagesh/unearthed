import express from 'express';
import giftsRouter from './routes/gifts.js'
import './config/dotenv.js'
import cors from 'cors'

const app = express();

app.use(cors())


app.use('/gifts', giftsRouter)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
