// server.js
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const myBookRoutes = require('./routes/myBookRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: 'https://booklibrarymanagementapp.netlify.app',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/mybooks', myBookRoutes);
app.get('/', (req, res) => {
  res.send("<h1>Server Running</h1>");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
