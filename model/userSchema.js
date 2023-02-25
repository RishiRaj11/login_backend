import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        require: true,
        default:false
    },
 
})

const user = mongoose.model('user', userSchema);
export default user;