import express from "express";
import UserController from "../controllers/user";

const router = express.Router();

router.get("/users", UserController.getAll);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);

export default router;