export const UserTable = (mongoose) => {
    const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
          password: {
            type: String,
            required: true,
          }
    });
 
    const User = mongoose.model('User', UserSchema);
  
    return User;
  }