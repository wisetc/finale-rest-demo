module.exports = (sequelize, DataTypes) => {
  return sequelize.define('BasicMaterial', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.ENUM('干料', '湿料')
  });
}
