const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy data
const internData = {
  name: "Saidala Ajay",
  referralCode: "ajay2025",
  donations: 12000,
};

const leaderboardData = [
  { name: "Ajay", donations: 12000 },
  { name: "Santosh", donations: 9500 },
  { name: "Shahina", donations: 8700 },
  { name: "Sathwika", donations: 7500 },
];

// Routes
app.get("/api/intern", (req, res) => {
  res.json(internData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("🎉 Backend is running! Try /api/intern or /api/leaderboard");
});
