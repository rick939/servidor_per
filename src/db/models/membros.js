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
      // define association here belongsTo(models.Esquadrao )
      Membros.belongsTo(models.Esquadrao, {foreignKey: 'squadId'})
    }
  }
  Membros.init({
    nome: DataTypes.STRING,
    magia: DataTypes.STRING,
    ranking: DataTypes.STRING,
    squadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Membros',
  });
  return Membros;
};