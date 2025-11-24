import jwt from 'jsonwebtoken';
import pool from '../config/db.js'; 

const user = async (id) => {
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
}

const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
});

console.log(`JWT Token for ${user.role} ${user.userName}: ${token}`);