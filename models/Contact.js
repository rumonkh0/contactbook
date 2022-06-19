const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type: String,
        require: [true, 'Please enter a name']
    },
    phone:{
        type: String,
        require: [true, 'Please enter a phone number']
    },
    email: String,
    type:{
        type: String,
        enum:['personal', 'business'],
        default: 'Personal'
    },
    date:{
        type: Date,
        default:Date.now
    }

});

module.exports = mongoose.model('contact', ContactSchema);