import dotenv from 'dotenv'

dotenv.config()
export const env = {
    MONGODB_CONFIG: process.env.MONGODB_CONFIG,
    DATABASE_NAME: process.env.DATABASE_NAME
}