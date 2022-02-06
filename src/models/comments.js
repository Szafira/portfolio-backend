const mongoose = require("mongoose");

const comments = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    
    });
module.exports = mongoose.model("comment", commentSchema);