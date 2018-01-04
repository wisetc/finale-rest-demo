module.exports = (sequelize, DataTypes) => {
  let BatchMaterial = sequelize.define('BatchMaterial', {
    batch: DataTypes.STRING
  });

  BatchMaterial.associate = (models) => {
    models.BatchMaterial.belongsTo(models.BasicMaterial, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'basic_material_id',
        allowNull: false
      }
    });
  }

  return BatchMaterial;
}
