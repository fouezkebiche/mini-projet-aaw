import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";
import genreRoutes from "./routes/genre.routes.js";
import orderRoutes from "./routes/order.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express(); // Create an Express app
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/genre", genreRoutes);
app.use("/api/order", orderRoutes);

app.get("/api", (req, res) => {
  res.send("testing...");
  console.log("... route");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
