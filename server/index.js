const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.ORIGIN || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Новое подключение клиента");

  socket.on("message", (message) => {
    console.log("Получено сообщение:", message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("Клиент отключился");
  });
});

const port = process.env.PORT || 7005;

app.use(router);

server.listen(port, (err) =>
  err ? console.log("Ошибка") : console.log(`Сервер запущен на порту ${port}`)
);