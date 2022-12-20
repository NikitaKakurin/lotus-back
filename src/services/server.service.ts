import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

export const app = express();
export const server = http.createServer(app);

export const socket = new Server(server, {
  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

socket.on("connection", (socket) => {
  console.log("socket connected");
});

setInterval(() => {
  socket.emit("currentTime", {
    currentTime: Date.now(),
  });
}, 1000);
