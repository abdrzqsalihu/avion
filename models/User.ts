// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
      },
      email: {
        type: String,
        required: [true, "User Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        index: true, // for faster email lookup
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
      },
      phone: {
        type: String,
        required: false,
      },
      password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: 6,
      },
      isAdmin: { type: Boolean, default: false }, // Admin flag
},
{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;