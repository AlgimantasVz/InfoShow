import pool from "../config/db.js"

const createEventsTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      eventName VARCHAR(100) NOT NULL,
      organizer VARCHAR(100) NOT NULL,
      organizerEmail VARCHAR(100) UNIQUE NOT NULL,
      organizerDiscord VARCHAR(100) UNIQUE NOT NULL,
      eventDate DATE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    try{
        pool.query(queryText);
        console.log("Event table created if not exist");
    }catch(err){
        console.log("Error creating events table : ", error);
    }
};

export default createEventsTable;