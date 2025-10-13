import pool from "../config/db.js";

export const getAllCommentsService = async () => {
    const result = pool.query("SELECT * FROM comments");
    return (await result).rows;
};

export const getCommentByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM comments where id = $1", [id]);
    return result.rows[0];
};

export const createCommentService = async (commentor, eventName, comment) => {
    const result = await pool.query("INSERT INTO comments (commentor, eventName, comment) VALUES ($1, $2, $3) RETURNING *", [commentor, eventName, comment]);
    return result.rows[0];
};

export const updateCommentService = async (id, commentor, eventName, comment) => {
    const result = await pool.query("UPDATE comments SET commentor=$1, eventName=$2, comment=$3 where id=$4 RETURNING *", [commentor, eventName, comment, id]);
    return result.rows[0];
};
export const deleteCommentService = async (id) => {
    const result = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};