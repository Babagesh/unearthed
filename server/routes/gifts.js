import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import GiftsController from '../controllers/gifts.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res)=>{
    res.status(200).sendFile(path.resolve(dirname, '../public/gift.html'))
})

export default router


