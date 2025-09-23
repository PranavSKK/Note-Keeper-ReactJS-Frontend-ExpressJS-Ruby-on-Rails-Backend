import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    mobileNo: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

export default User;