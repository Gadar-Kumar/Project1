import React, { useState } from "react";

const faqData = [
  {
    question: "What is mental health?",
    answer: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.",
  },
  {
    question: "Why is mental health important?",
    answer: "Good mental health helps you cope with stress, relate to others, and make healthy choices.",
  },
  {
    question: "How can I improve my mental health?",
    answer: "Exercise regularly, eat healthy, sleep well, talk to someone, and seek professional help when needed.",
  },
  {
    question: "What are common mental health disorders?",
    answer: "Common disorders include anxiety, depression, bipolar disorder, and PTSD.",
  },
  {
    question: "When should I seek help?",
    answer: "Seek help if you're feeling overwhelmed, anxious, hopeless, or if your mental health is affecting your daily life.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Mental Health FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 flex justify-between items-center bg-white rounded-xl hover:bg-gray-200 transition"
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
