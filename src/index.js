import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";
import commentRoutes from "./routes/commentRoutes.js"
import errorHandeling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createEventsTable from "./data/createEventTable.js";
import createCommentsTable from "./data/createCommentTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Midware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/event/:id/users", userRoutes);
app.use("/api/event", eventsRoutes);
app.use("/api/event/:id/users/:id/comments", commentRoutes)

//Error handeling
app.use(errorHandeling);

//create table before start
createUserTable();
createEventsTable();
createCommentsTable();

//Test Postgres connection
app.get("/", async(req, res) =>{
    const result = await pool.query("SELECT current_database()");
    res.send(`Database name: ${result.rows[0].current_database}`);
}); 

//Server
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
});
