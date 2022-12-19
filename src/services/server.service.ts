import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

export const app = express();
export const server = http.createServer(app);
export const socket = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
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
