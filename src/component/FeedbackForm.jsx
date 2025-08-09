import React, { useState } from "react";
import { Link } from "react-router";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation: Check if feedback is empty
    if (feedback.trim() === "") {
      setError("⚠️ Please provide feedback before submitting.");
      setSuccess(""); // Clear any old success message
      return; // Stop form submission
    }

    // If valid:
    setError(""); // Clear error
    setSuccess("✅ Feedback submitted successfully!");
    // Optionally: send to server or reset
    setFeedback(`${feedback}`); 
    console.log(feedback)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4  rounded h-100">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Show error or success message */}
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {success && <div className="text-green-600 mt-2">{success}
        <div>
            click to go to 
            <Link to='/' className="text-blue-500 font-bold text-md"> Home</Link>
        </div>
        </div>}
    </div>
  );
}

export default FeedbackForm;
