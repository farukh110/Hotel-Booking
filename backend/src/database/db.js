const mongoose = require("mongoose");

let mongoURL = 'mongodb+srv://oan:oanoan12@cluster0.5ubr7tu.mongodb.net/booking';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

let connection = mongoose.connection;

connection.on('error', () => {

    console.log("MongoDB connection failed");

});

connection.on('connected', () => {

    console.log("MongoDB connection success");

});

module.exports = mongoose;