const mongoose  = require('mongoose');
const {isEmail} = require('validator');


const userSchema = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
            maxLength: 100,
        },
        email: {
           type: 'string',
           unique:true,
           required: [true,'please provide email address'],
           lowercase: true,
           validate:[isEmail,'please provide valid email address']
        },
        phoneNumber: {
            type:Number,
            max:10,
            required: [true,'please provide a phone number']  
        },
        pin: {
          type: Number,
          max:6,
          required: [true,'please provide a pin']
        },
        area:{
            type:'string',
            required: [true,'please provide a area name']
        },
        state:{
            type:'string',
            require:[true,'please provide a state name']
        }
    }
)

module.exports = mongoose.model('User',userSchema)