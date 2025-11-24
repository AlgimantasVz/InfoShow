import express from "express"
import { createComment, 
    deleteComment, 
    getAllComments, 
    getCommentById, 
    updateComment } from "../controllers/commentController.js";
import { validateComment } from "../middlewares/inputValidator.js";
import { verifyToken, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);

router.post("/", verifyToken, validateComment, createComment);

router.put("/:id", verifyToken, validateComment, updateComment);

router.delete("/:id", verifyToken, deleteComment);

export default router;
