import express from "express";
import "dotenv/config";
import authRoute from "./routes/authRoutes.js";
import bookRoute from "./routes/bookRoutes.js"
import { connectDb } from "./lib/db.js";
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/books", bookRoute);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on ${PORT}`);
});
