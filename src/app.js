import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import docsRoutes from "./routes/docs.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const express = require('express');
const cors = require('cors');

app.use(cors({
    origin: [
        "https://www.bibliodocumentosinformatica.lol",
        "https://bibliodocumentosinformatica.lol",
        "https://bibliodocumentosinformaticaapi.onrender.com"
    ],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials',
        'Content-Type',
        'Authorization',
    ],
}));


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", docsRoutes);

export default app;