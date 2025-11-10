import express from "express"
import { createEvent, 
    deleteEvent, 
    getAllEvents, 
    getEventById, 
    updateEvent } from "../controllers/eventController.js";
import { validateEvent } from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateEvent, createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", validateEvent, updateEvent);
router.delete("/:id", deleteEvent);

export default router;
