const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🔥 Conectado a MongoDB: citasDB');
  } catch (error) {
    console.error('❌ Error conectando a Mongo:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;