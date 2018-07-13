const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BS');
mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success.")
});
    Schema = mongoose.Schema;
module.exports = Schema;