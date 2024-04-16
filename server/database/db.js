import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URL = `mongodb+srv://blendcodess40:himansuwithcode@cluster0.falh7gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("connected successsfully");
  } catch (error) {
    console.error("error while connecting with the data ", error.message);
  }
};
export default dbConnection;
