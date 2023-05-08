import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../utils/env/env.js';

export function verifyJWT(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    throw new Error('Permission denied');
  }
}
