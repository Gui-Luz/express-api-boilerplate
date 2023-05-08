import dotenv from 'dotenv';
dotenv.config();
export const POSTGRES_STRING = process.env.POSTGRES_STRING;
export const JWT_SECRET = process.env.JWT_SECRET;