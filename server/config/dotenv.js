import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Get absolute path to this file's directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Calculate absolute path to .env file
dotenv.config({
    path: join(__dirname, '../.env')
})