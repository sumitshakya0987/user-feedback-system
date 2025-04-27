import axios from 'axios';

const API = axios.create({
  baseURL: 'https://user-feedback-system.onrender.com', // Backend runs on 5000
});

// Submit feedback
export const submitFeedback = (feedbackData) => API.post('/feedback', feedbackData);

// Fetch all feedback
export const fetchFeedback = () => API.get('/feedback');
