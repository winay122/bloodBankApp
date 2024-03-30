const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();

// mongoDB connect

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT || 8080;
console.log(`connected with DB ${process.env.MONGO_URL}`);

app.listen(PORT, () => {
  console.log(
    `Server is runnin in ${process.env.DEV_MODE} MODE at Port: ${process.env.PORT}`
  );
});
