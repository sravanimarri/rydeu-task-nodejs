const express = require('express');
require('dotenv').config();

const rideRoutes = require('./routes/rideRoutes'); // We'll create this soon

const app = express();
app.use(express.json()); // parse JSON

// Routes
app.use('/api/rides', rideRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Rydeu API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
