export const personalTable = (mongoose) => {
  const personalSchema = new mongoose.Schema({
    personal_firstName: String,
    personal_lastName: String,
    personal_email: String,
    personal_salary: Number,
    personal_date_started_work: Date,
    department_id: mongoose.Schema.Types.ObjectId
  });

  const Personal = mongoose.model('Personal', personalSchema);
  
  return Personal;
}