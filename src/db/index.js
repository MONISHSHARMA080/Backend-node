import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_to_db = async () => {
  try{
    const connect_to_db_instance = await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
    console.log(`\n Successfully connected to mongodb . DB hosted at ${connect_to_db_instance.connection.host} `);
  }
  catch (error) {
    console.log("\n\n---------------connection to database failed---------------------")
    console.log(`Error while connecting to database---->>> ${error}`)
    console.error(error);
    process.exit(1); 
  }
}

export default connect_to_db;
