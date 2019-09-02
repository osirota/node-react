export const departmentTable = (sequelize, DataTypes) => {
    const Department = sequelize.define('department', {
        department_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
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