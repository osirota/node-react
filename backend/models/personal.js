export const personalTable = (sequelize, DataTypes) => {
    const Personal = sequelize.define('personal', {
        personal_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        personal_firstName: DataTypes.STRING,
        personal_lastName: DataTypes.STRING,
        personal_email: DataTypes.STRING,
        personal_salary: DataTypes.INTEGER,
        personal_date_started_work: DataTypes.DATE,
        personal_department_id: DataTypes.INTEGER
      },
      {
        freezeTableName: true,
      }
    );
  
    Personal.associate = (models) => {
        Personal.belongsTo(models.department);
    };
  
    return Personal;
  }