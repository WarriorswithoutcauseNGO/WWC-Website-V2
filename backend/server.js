const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// You can keep other backend routes here (not related to Ketto payments)

app.get("/", (req, res) => {
  res.send("WWC backend is running.");
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
