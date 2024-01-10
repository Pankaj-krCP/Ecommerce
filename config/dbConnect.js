const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log("DtaBase connected Successfully");
  } catch (error) {
    console.log("DataBase Error:", error);
  }
};

module.exports = { dbConnect };
