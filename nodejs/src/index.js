import express from "express";
import cors from "cors";
import { Worker } from "worker_threads";
import UserRoutes from "./routes/user";
require("dotenv").config();

app.get("/test", async (req, res) => {
  console.log("Test endpoint");
  const worker = new Worker("./src/worker.js");
  worker.on("message", (data) => {
    return res.status(200).json(`result is ${data}`);
  });
  worker.on("error", (msg) => {
    return res.status(404).json(`An error occurred: ${msg}`);
  });
  // return res.status(200).json({
  //   msg: "Test endpoint",
  // });
});

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(cors({}));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Other middlewares and DB Connections

  app.get("/health", async (req, res) => {
    res.send("Server is up and running");
  });

  app.use("/api", UserRoutes);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
