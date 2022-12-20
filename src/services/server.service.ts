import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

export const app = express();
export const server = http.createServer(app);

export const socket = new Server(server, {
  cors: {
    origin: [
      "*",
      "http://127.0.0.1:3000",
      "https://nikitakakurin-task-schelduler.netlify.app",
    ],
  },
});
app.use(
  cors({
    origin: [
      "*",
      "http://127.0.0.1:3000",
      "https://nikitakakurin-task-schelduler.netlify.app",
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

socket.on("connection", (socket) => {
  console.log("socket connected");
});
socket.on("disconnection", (socket) => {
  console.log("socket disconnection");
});

setInterval(() => {
  console.log("socket currentTime");
  socket.emit("currentTime", {
    currentTime: `${Date.now()}`,
  });
}, 1000);
