import { DataTypes } from 'sequelize';
import { randomUUID } from 'crypto';

export const PetModel = (sequelize) => {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => randomUUID(),
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(80), allowNull: true },
    species: { type: DataTypes.ENUM('dog', 'cat'), allowNull: false },
    breed: { type: DataTypes.STRING(120), allowNull: true },
    color: { type: DataTypes.STRING(60), allowNull: true },
    size: { type: DataTypes.ENUM('small', 'medium', 'large'), allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.ENUM('lost', 'found'), allowNull: false, defaultValue: 'lost' },
    lastSeenAddress: { type: DataTypes.STRING(200), allowNull: true },
    lastSeenLat: { type: DataTypes.FLOAT, allowNull: true },
    lastSeenLng: { type: DataTypes.FLOAT, allowNull: true },
    photoUrl: { type: DataTypes.STRING(500), allowNull: true },
    ownerId: { type: DataTypes.UUID, allowNull: false },
  }, { tableName: 'pets', underscored: true });
  return Pet;
};
