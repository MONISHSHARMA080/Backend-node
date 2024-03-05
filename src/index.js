import dotenv from "dotenv";
import connect_to_db from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connect_to_db()
  .then(()=>{
    app.listen(process.env.PORT ||  8000  , ()=>{
      console.log((` Server is listening at port ${process.env.PORT}`))
    })
  })
  .catch((err) => {
    console.log("error occured in connecting to momgodb , error", err);
  });
