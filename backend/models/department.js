export const departmentTable = (mongoose) => {
  const departmentSchema = new mongoose.Schema({
    department_name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
  });

  const { Personal } = mongoose.models;

  departmentSchema.pre('remove', async function(next) {
    await Personal.deleteMany({ department_id: this._id });
    next();
  });

  const Department = mongoose.model('Department', departmentSchema);

  return Department;
}