'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Membros.init({
    nome: DataTypes.STRING,
    magia: DataTypes.STRING,
    ranking: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Membros',
  });
  return Membros;
};