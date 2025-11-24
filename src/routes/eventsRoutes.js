import express from "express"
import { createEvent, 
    deleteEvent, 
    getAllEvents, 
    getEventById, 
    updateEvent } from "../controllers/eventController.js";
import { validateEvent } from "../middlewares/inputValidator.js";
import { optionalVerifyToken, authorize } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.post("/", optionalVerifyToken, authorize("manager", "admin"), validateEvent, createEvent);

router.put("/:id", optionalVerifyToken, authorize("manager", "admin"), validateEvent, updateEvent);

router.delete("/:id", optionalVerifyToken, authorize("manager", "admin"), deleteEvent);

export default router;
