import { useState, useEffect } from 'react';

import { axiosInstance } from '../services/api';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axiosInstance.get('/feedback');
      setFeedbacks(res.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Feedbacks</h2>
      <div className="grid gap-4">
        {feedbacks.map((fb) => (
          <div key={fb._id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{fb.name}</h3>
            <p className="text-gray-600">{fb.email}</p>
            <p>{fb.feedback}</p>
            <p className="text-sm text-gray-500">{new Date(fb.createdAt).toLocaleString()}</p>
            <p className="text-xs italic">{fb.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
