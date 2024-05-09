'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User,{
        foreignKey:'UserId',
        as:'author_review',
        onDelete:'CASCADE'
      })
    }
  }
  Review.init({
    review_theme: {type:DataTypes.STRING,allowNull:false},
    review_body: {type:DataTypes.TEXT,allowNull:false},
    UserId: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};