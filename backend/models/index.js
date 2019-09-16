import mongoose from 'mongoose';

import { personalTable } from './personal';
import { departmentTable } from './department';

mongoose.connect("mongodb://localhost:2707/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personal = personalTable(mongoose);
const department = departmentTable(mongoose);

export const db = {
  mongoose,
  personal,
  department,
}