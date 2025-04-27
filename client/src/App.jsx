import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubmitFeedbackPage from './pages/SubmitFeedbackPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/" className="text-blue-500">Submit Feedback</Link>
        <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SubmitFeedbackPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
