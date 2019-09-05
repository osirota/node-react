export const personalTable = (sequelize, DataTypes) => {
    const Personal = sequelize.define('personal', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        personal_firstName: DataTypes.STRING,
        personal_lastName: DataTypes.STRING,
        personal_email: DataTypes.STRING,
        personal_salary: DataTypes.INTEGER,
        personal_date_started_work: DataTypes.DATE
      },
      {
        freezeTableName: true,
      }
    );
  
    Personal.associate = (models) => {
        Personal.belongsTo(models.department, {
          onDelete: 'cascade',
        });
    };
  
    return Personal;
  }