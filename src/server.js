const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL to send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
