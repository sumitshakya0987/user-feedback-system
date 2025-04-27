const Feedback = require('../models/Feedback');

// @desc   Submit feedback
// @route  POST /feedback
const submitFeedback = async (req, res) => {
  try {
    const { username, email, feedback, category } = req.body;

    const newFeedback = await Feedback.create({
      username,
      email,
      feedback,
      category,
    });

    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc   Get all feedback
// @route  GET /feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { submitFeedback, getAllFeedback };
