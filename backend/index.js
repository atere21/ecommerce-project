const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// mongodb connection
console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: 'String',
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

const userModel = mongoose.model("user", userSchema);

// api
app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    console.log(result);

    if (result) {
      res.send({ message: "Email is already registered" });
    } else {
      const data = new userModel(req.body);
      await data.save();
      res.send({ message: "Successfully signed up" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Error signing up" });
  }
});

app.listen(PORT, () => console.log("server is running at port : " + PORT));
