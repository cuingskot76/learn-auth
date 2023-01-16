import http from "http";
import app from "./app.js";
import db from "./config/database.js";
import User from "./model/user.js";

const server = http.createServer(app);

try {
  await db.authenticate();
  console.log("Databases connected");
  // * automatic create table
  await User.sync();
} catch (error) {
  console.log(error);
}

server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});

// import express from "express";
// import db from "./config/Database.js";
// import router from "./routes/index.js";
// // import Users from "./models/UserModel.js";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// dotenv.config();
// const app = express();

// try {
//   await db.authenticate();
//   console.log("Databases connected");
//   // * automatic create table
//   //   await Users.sync();
// } catch (error) {
//   console.log(error);
// }

// // middleware
// // origin = domain, using 3000(default react localhost)
// // enable cors
// app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
// // app.use(cors());
// app.use(cookieParser());

// // pasang middleware untuk menerima data dari body jangan sampe kebaca undefined
// app.use(express.json());

// app.use(router);

// app.listen(5000, () => console.log("Server running at port 5000"));
