const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // <== important
const router = require('./routes/feedbackRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // <== allow frontend to talk to backend
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:food1611@cluster0.yc9zu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed:', err));
  app.get('/', (req, res) => {
    res.send('Welcome to the User Feedback System API!');
  });
  

app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
