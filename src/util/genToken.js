import jwt from 'jsonwebtoken';
import pool from '../config/db.js'; 

const getAllUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}

const generateTokens = async () => {
    const users = await getAllUsers();
    
    if (users.length === 0) {
        console.log("No users found in database");
        return;
    }
    
    users.forEach(user => {
        const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        console.log(`JWT Token for ${user.name} (ID: ${user.id}): ${token}`);
    });
}

generateTokens().catch(err => console.error(err));