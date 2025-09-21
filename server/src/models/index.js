import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_NAME = 'petfinder',
  DB_USER = 'postgres',
  DB_PASS = 'postgres',
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'postgres',
  logging: false,
});

import { UserModel } from './user.js';
import { PetModel } from './pet.js';

export const User = UserModel(sequelize);
export const Pet = PetModel(sequelize);

// Associations
User.hasMany(Pet, { foreignKey: 'ownerId', as: 'pets' });
Pet.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });
