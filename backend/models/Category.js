const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            maxLength: 32,
            unique: true
        }
    },
    {timestamp: true}

);

module.exports = mongoose.model("Category", categorySchema)