'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User,{
        foreignKey:'UserId',
        as:'author_post',
        onDelete:'CASCADE'
      })
    }
  }
  Post.init({
    header: {type:DataTypes.STRING,allowNull:false},
    description: {type:DataTypes.TEXT,allowNull:false},
    UserId: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};