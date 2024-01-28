import express from "express";
import { Worker } from "worker_threads";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/health", async (req, res) => {
  res.send("Server is up and running");
});

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
