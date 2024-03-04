import dotenv from "dotenv";
import connect_to_db from "./db/index.js";

dotenv.config({
    path :"./env"
})

connect_to_db()
