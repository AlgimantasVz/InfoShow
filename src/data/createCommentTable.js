import pool from "../config/db.js"

const createCommentsTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      commentor VARCHAR(100) NOT NULL,
      eventName VARCHAR(100) NOT NULL,
      comment VARCHAR(1000) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    try{
        pool.query(queryText);
        console.log("Comments table created if not exist");
    }catch(err){
        console.log("Error creating comments table : ", error);
    }
};

export default createCommentsTable;