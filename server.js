// Khởi tạo server
const express = require("express");
const app = express();
// Require các packages cần thiết
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// SD các packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

// import routes
const userRoutes = require("./routes/users.routes");

// Set up routes
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
