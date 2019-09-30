import mongoose from 'mongoose';

import { personalTable } from './personal';
import { departmentTable } from './department';
import { UserTable } from './user';

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
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
const user = UserTable(mongoose);

export const db = {
  mongoose,
  personal,
  department,
  user
}