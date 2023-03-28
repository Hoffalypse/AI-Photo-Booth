import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Open AI");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3456, () =>
      console.log("Server has Started om Port http://localhost:3456")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
