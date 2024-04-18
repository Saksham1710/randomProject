import mongoose from 'mongoose';
  const uri = "mongodb+srv://saksham:Saksham%40123@cluster0.j5qv4li.mongodb.net";
const connectDb = async() => {
  try {
    const connectionInstance = await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to mongo, \nDB HOST: ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error connecting to mongo: ", error);
    process.exit(1);
  }
}
export default connectDb;
