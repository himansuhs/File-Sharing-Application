import express from "express";
import route from "./routes/routes.js";
import cors from "cors";
import dbConnection from "./database/db.js";

const app = express();
app.use(cors());
app.use("/", route);
const port = 5500;
dbConnection();
app.listen(port, () => {
  console.log("server started");
});
