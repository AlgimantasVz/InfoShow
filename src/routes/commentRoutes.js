import express from "express"
import { createComment, 
    deleteComment, 
    getAllComments, 
    getCommentById, 
    updateComment } from "../controllers/commentController.js";
import { validateComment } from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/comment", validateComment, createComment);
router.get("/comment", getAllComments);
router.get("/comment/:id", getCommentById);
router.put("/comment/:id", validateComment, updateComment);
router.delete("/comment/:id", deleteComment);

export default router;
