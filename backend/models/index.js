import mongoose from 'mongoose';

import { personalTable } from './personal';
import { departmentTable } from './department';

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
})

const MongoDB = mongoose.connection;

MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});

const personal = personalTable(mongoose);
const department = departmentTable(mongoose);

export const db = {
  mongoose,
  personal,
  department,
}