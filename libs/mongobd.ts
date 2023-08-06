import mongoose from "mongoose";

const connetMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connetMongoDB;
