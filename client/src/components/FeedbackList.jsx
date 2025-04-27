import { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/api';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const { data } = await fetchFeedback();
        setFeedbacks(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFeedback();
  }, []);

  const filteredFeedbacks = feedbacks
    .filter(fb => (filter ? fb.category === filter : true))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.userName.localeCompare(b.userName);
      } else {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }
    });

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4 mb-4">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="">All Categories</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2">
          <option value="timestamp">Newest</option>
          <option value="name">Name</option>
        </select>
      </div>
      {filteredFeedbacks.map((fb) => (
        <FeedbackItem key={fb._id} feedback={fb} />
      ))}
    </div>
  );
};

export default FeedbackList;
