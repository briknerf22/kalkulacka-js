const express = require('express');
const app = express();

// Middleware setup (e.g., JSON parsing)
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('index.html');
});

// Export the app
module.exports = app;
