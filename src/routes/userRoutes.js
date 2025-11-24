import express from "express"
import { createUser, 
    deleteUser, 
    getAllUsers, 
    getUserById, 
    updateUser } from "../controllers/userController.js";
import { validateUser } from "../middlewares/inputValidator.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", validateUser ,createUser);
router.get("/", verifyToken, getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, validateUser, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;