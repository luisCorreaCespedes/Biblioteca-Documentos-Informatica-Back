import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import docsRoutes from "./routes/docs.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "https://bibliodocumentosinformatica.onrender.com",
    credentials: true,
    allowedHeaders: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", docsRoutes);

export default app;