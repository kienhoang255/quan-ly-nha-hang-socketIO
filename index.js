const PORT = 8000;

const io = require("socket.io")(PORT, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("table", (data) => {
    io.emit("table", data);
  });

  socket.on("bill", (data) => {
    io.emit("bill", data);
  });

  socket.on("foodServed", (data) => {
    io.emit("foodServed", data);
  });

  socket.on("foodCancel", (data) => {
    io.emit("foodCancel", data);
  });

  socket.on("foodOrdered", (data) => {
    io.emit("foodOrdered", data);
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});
