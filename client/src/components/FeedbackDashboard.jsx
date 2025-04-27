import { useEffect, useState } from "react";
import axios from "axios";

function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/feedback');
      setFeedbacks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Feedbacks</h2>
      <div className="grid gap-4">
        {feedbacks.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{item.username} ({item.email})</h3>
            <p className="text-gray-600">{item.feedback}</p>
            <p className="text-sm text-gray-400">{new Date(item.createdAt).toLocaleString()}</p>
            {item.category && (
              <p className="text-sm text-blue-500 mt-1">Category: {item.category}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackDashboard;
