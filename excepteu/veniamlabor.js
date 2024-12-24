const express = require('express');
const app = express();

// Route definition
app.get('/completions', (req, res) => {
  // Logic to handle requests to /completions
  res.send('This is the completions endpoint');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
