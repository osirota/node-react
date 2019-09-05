export const departmentTable = (sequelize, DataTypes) => {
  const Department = sequelize.define('department', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      department_name: DataTypes.STRING,
    },
    {
      freezeTableName: true,
    }
  );

  Department.associate = (models) => {
    Department.hasMany(models.personal);
  };

  return Department;
}