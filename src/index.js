const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const app = express();
// Connect to MongoDB
connectDB();
// Middleware
app.use(express.json());
// Routes
app.use('/users', userRoutes);
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// a5181a5472023955971069e435f840d802fa30ba2f65c43e3075340f97042045