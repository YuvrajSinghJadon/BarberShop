import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        trim : true,
    },
    lastName :{
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        trim : true,
    },
    password :{
        type : String,
        required : true,
    },
    phone: {
        type: Number,
    },
    
    
    image :{
        type : String,
        required : true,
    },
    token : {
        type : String,
    },
    resetPasswordExpires : {
        type : Date,
    },
    
});

const User = mongoose.model('User',userSchema)
export default User;