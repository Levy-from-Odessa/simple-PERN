module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price_range: DataTypes.INTEGER 
  })

 

  return Restaurant
}
