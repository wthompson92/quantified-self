'use strict';

module.exports = (sequelize, DataTypes) => {
  const MealFoods = sequelize.define('MealFoods', {
    mealId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {});
  MealFoods.associate = function(models) {
    // associations can be defined here
    // const MealFoods = sequelize.define('MealFoods', {
  //   mealId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Meals',
  //     key: 'id'
  //   }
  // },
  // foodId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Foods',
  //     key: 'id'
  //   }
  // }
};
  return MealFoods;
};