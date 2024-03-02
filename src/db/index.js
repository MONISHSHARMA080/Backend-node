import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connect_to_db = async () => {
  try{
    const connect_to_db_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  }
  catch (error) {
    console.log("connection to database failed")
    console.log(`Error while connecting to database ${error}`)
    console.error(error);
    process.exit(1); 
  }
  console.log(`MongoDB connected on ${connect_to_db.connection.host}`)
}

export default connect_to_db;
