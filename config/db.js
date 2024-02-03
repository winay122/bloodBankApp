const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb connection error: ${error}`);
  }
};

module.exports = connectDB;
