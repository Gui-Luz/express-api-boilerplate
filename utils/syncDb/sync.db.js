import User from '../../models/user.models.js';
import db from '../../repositories/db.js';

db.sync({ force: true })
  .then(() => console.log('User table synchronized'))
  .catch((error) => console.error('Error synchronizing user table:', error));
