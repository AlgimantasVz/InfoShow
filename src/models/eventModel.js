import pool from "../config/db.js";

export const getAllEventsService = async () => {
    const result = pool.query("SELECT * FROM events");
    return (await result).rows;
};

export const getEventByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM events where id = $1", [id]);
    return result.rows[0];
};

export const createEventService = async (eventName, organizer, email, discord, date) => {
    const result = await pool.query("INSERT INTO events (eventName, organizer, organizerEmail, organizerDiscord, eventDate) VALUES ($1, $2, $3, $4, $5) RETURNING *", [eventName, organizer, email, discord, date]);
    return result.rows[0];
};

export const updateEventService = async (id, eventName, organizer, email, discord, date) => {
    const result = await pool.query("UPDATE events SET eventName=$1, organizer=$2, organizerEmail=$3, organizerDiscord=$4, eventDate=$5 where id=$6 RETURNING *", [eventName, organizer, email, discord, date, id]);
    return result.rows[0];
};
export const deleteEventService = async (id) => {
    const result = await pool.query("DELETE FROM events WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};