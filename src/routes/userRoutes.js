import express from "express"
import { createUser, 
    deleteUser, 
    getAllUsers, 
    getUserById, 
    updateUser } from "../controllers/userController.js";
import { validateUser } from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateUser ,createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

export default router;