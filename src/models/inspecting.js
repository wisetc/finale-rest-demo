module.exports = (sequelize, DateTypes) => {
  var Inspecting = sequelize.define('Inspecting', {
    auditing_man: DateTypes.STRING,
    auditing_date: DateTypes.DATE,
    status: DateTypes.ENUM('待检验', '检验完成', '审核通过', '审核不通过'),
    remark: DateTypes.STRING,
    batch: DateTypes.STRING,
    approve_suggestion: DateTypes.STRING
  });

  Inspecting.associate = (models) => {
    models.Inspecting.belongsTo(models.BatchMaterial, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'batch_material_id',
        allowNull: false
      }
    });
  }

  return Inspecting;
};
