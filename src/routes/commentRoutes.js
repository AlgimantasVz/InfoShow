import express from "express"
import { createComment, 
    deleteComment, 
    getAllComments, 
    getCommentById, 
    updateComment } from "../controllers/commentController.js";
import { validateComment } from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateComment, createComment);
router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.put("/:id", validateComment, updateComment);
router.delete("/:id", deleteComment);

export default router;
