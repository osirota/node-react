export const departmentTable = (mongoose) => {
  const departmentSchema = new mongoose.Schema({
    department_name: String
  });

  const Department = mongoose.model('Department', departmentSchema)


  return Department;
}