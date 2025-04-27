const FeedbackItem = ({ feedback }) => {
    return (
      <div className="border p-4 rounded shadow-sm">
        <h3 className="font-bold">{feedback.userName} ({feedback.email})</h3>
        <p>{feedback.feedbackText}</p>
        <p className="text-sm text-gray-500">{feedback.category} | {new Date(feedback.timestamp).toLocaleString()}</p>
      </div>
    );
  };
  
  export default FeedbackItem;
  