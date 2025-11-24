import express from "express"
import { createUser, 
    deleteUser, 
    getAllUsers, 
    getUserById, 
    updateUser } from "../controllers/userController.js";
import { validateUser } from "../middlewares/inputValidator.js";
import { verifyToken, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", validateUser, createUser);

router.get("/", verifyToken, authorize("admin"), getAllUsers);

router.get("/:id", verifyToken, getUserById);

router.put("/:id", verifyToken, validateUser, updateUser);

router.delete("/:id", verifyToken, authorize("admin"), deleteUser);

export default router;