import { useState } from "react";

import { axiosInstance } from "../services/api";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    feedback: "",
    category: "", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('formdata',formData);
      // await axios.post('http://localhost:5000/feedback', formData);
      await axiosInstance.post('/feedback',formData);
      alert('Feedback submitted successfully!');
      setFormData({ username: "", email: "", feedback: "", category: "" });
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Name"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <textarea
        name="feedback"
        placeholder="Feedback"
        value={formData.feedback}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="">Select Category</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
