'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post);
      User.hasMany(models.Review);
    }
  }
  User.init({
    firstname: {type:DataTypes.STRING,allowNull:false},
    lastname: {type:DataTypes.STRING,allowNull:false},
    login: {type:DataTypes.STRING,allowNull:false,unique:true},
    password: {type:DataTypes.STRING,allowNull:false},
    isAdmin: {type:DataTypes.BOOLEAN,allowNull:true},
    auth_token: {type:DataTypes.TEXT,allowNull:true}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};