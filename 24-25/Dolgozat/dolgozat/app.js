import express from 'express'
import cors from 'cors'
import router from './router/books.js'
import { initializeDB } from "./database.js";

const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/books", router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port http://localhost:3000"));
};

startServer();