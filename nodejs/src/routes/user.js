import express from "express";
import UserController from "../controllers/user.js";

const UserRoutes = express.Router();

UserRoutes.get("/users", UserController.getAll);
UserRoutes.post("/users", UserController.create);
UserRoutes.put("/users/:id", UserController.update);

export default UserRoutes;
