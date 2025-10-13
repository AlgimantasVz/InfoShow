import pool from "../config/db.js";

export const getAllUsersService = async () => {
    const result = pool.query("SELECT * FROM users");
    return (await result).rows;
};

export const getUsersByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
};

export const createUserService = async (name, userName, email, discord) => {
    const result = await pool.query("INSERT INTO users (name, userName, email, discord) VALUES ($1, $2, $3, $4) RETURNING *", [name, userName, email, discord]);
    return result.rows[0];
};

export const updateUsersService = async (id, name, userName, email, discord) => {
    const result = await pool.query("UPDATE users SET name=$1, userName=$2, email=$3, discord=$4 where id=$5 RETURNING *", [name, userName, email, discord, id]);
    return result.rows[0];
};
export const deleteUsersService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};