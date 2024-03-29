const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    ngo_link:{
        type: String,
        // enum: ['KG', 'liters', 'meters', 'cm'],
        required : true 
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('details', DetailsSchema);