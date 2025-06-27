
const mongoose = require('mongoose');

function connectDB() {
    try {
        mongoose.connect('mongodb+srv://ashish84k:HackerLover3@ashish84k.yqjnhbz.mongodb.net/Portfolio')
        .then(() => {
            console.log("✅ MongoDB Connected...");
        })
        .catch((error) => {
            console.log("❌ MongoDB Connection Failed:", error.message);
        });
    } catch (error) {
        console.log("❌ MongoDB Connection Error:", error.message);
    }
}

module.exports = connectDB;

// MONGO_URI=mongodb+srv://ashish84k:HackerLover3@ashish84k.yqjnhbz.mongodb.net/Controlers