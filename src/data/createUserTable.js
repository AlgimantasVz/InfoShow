import pool from "../config/db.js"

const createUserTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      userName VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL,
      discord VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    try{
        pool.query(queryText);
        console.log("User table created if not exist");
    }catch(err){
        console.log("Error creating users table : ", error);
    }
};

export default createUserTable;