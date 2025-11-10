import { response } from "express";
import { createEventService, deleteEventService, getAllEventsService, getEventByIdService, updateEventService } from "../models/eventModel.js";

//Standard reponse function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createEvent = async (req, res, next) => {
    const {eventName, organizer, organizerEmail, organizerDiscord, eventDate} = req.body;
    try{
        const newEvent = await createEventService(eventName, organizer, organizerEmail, organizerDiscord, eventDate);
        handleResponse(res, 201, "Event Created Succesfully", newEvent)
    }catch (err){
        next(err);
    }
};

export const getAllEvents = async (req, res, next) => {
    try{
        const event = await getAllEventsService();
        handleResponse(res, 200, "Events Fetched Succesfully", event)
    }catch (err){
        next(err);
    }
};

export const getEventById = async (req, res, next) => {
    try{
        const event = await getEventByIdService(req.params.id);
        if(!event) return handleResponse(res, 404, "Event not found")
        handleResponse(res, 200, "Event Fetched Succesfully", event)
    }catch (err){
        next(err);
    }
};

export const updateEvent = async (req, res, next) => {
    const {eventName, organizer, organizerEmail, organizerDiscord, eventDate} = req.body;
    try{
        const updatedEvent = await updateEventService(req.params.id, eventName, organizer, organizerEmail, organizerDiscord, eventDate);
        if(!updatedEvent) return handleResponse(res, 404, "Event not found")
        handleResponse(res, 200, "Event Updated Succesfully", updatedEvent)
    }catch (err){
        next(err);
    }
};

export const deleteEvent = async (req, res, next) => {
    try{
        const deletedEvent = await deleteEventService(req.params.id);
        if(!deletedEvent) return handleResponse(res, 404, "Event not found")
        handleResponse(res, 204)
    }catch (err){
        next(err);
    }
}; 