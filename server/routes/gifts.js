import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import giftData from '../data/gifts.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const router = express.Router()

router.get('/', (req, res)=> {
    res.status(200).json(giftData)
})

router.get('/:giftId', (req, res)=>{
    res.status(200).sendFile(path.resolve(dirname, '../public/gift.html'))
})

export default router


