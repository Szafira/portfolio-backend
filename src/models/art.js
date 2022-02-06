const mongoose = require ("mongoose");

const artSchema = mongoose.Schema ({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: Number,
    dateUpload: Number,
    artImage: String

});

module.exports = mongoose.model("art", artSchema);