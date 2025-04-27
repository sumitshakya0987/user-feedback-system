const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  category: { type: String, enum: ['Suggestion', 'Bug Report', 'Feature Request'], default: 'Suggestion' },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
