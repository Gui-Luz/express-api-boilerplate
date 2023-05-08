import dotenv from 'dotenv';

dotenv.config();
export const { POSTGRES_STRING } = process.env;
export const { JWT_SECRET } = process.env;
