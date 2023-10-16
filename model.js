const mongoose= require('mongoose');

const memberSchema = new mongoose.Schema({
    name:{
        type : String ,
        required:true
    },
    email: {
        type : String,
        required: true,
    },

    gender:{
        type : String,
        required :true
    },

    password : {
        type :String,
        required :true
    }

});

// Collection creation
const gymMember =  mongoose.model("gymMember", memberSchema);

module.exports = gymMember;