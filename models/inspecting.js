module.exports = (sequelize, DateTypes) => {
  return sequelize.define('Inspecting', {
    inspecting_batch: DateTypes.STRING,
    material_id: DateTypes.INTEGER,
    auditing_man: DateTypes.STRING,
    auditing_date: DateTypes.DATE,
    status: DateTypes.ENUM('1', '2', '3', '-2', '-3'),
    remark: DateTypes.STRING,
    material_batch_no: DateTypes.STRING,
    approve_suggestion: DateTypes.STRING
  });
};
