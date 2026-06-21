import React from 'react';

export const ToolsWindow: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold mb-3">🔧 My Technical Toolkit</h3>
    <p>Take a look at my Projects to see where I've used some of these!</p>
    <div className="mt-4 space-y-2">
      <div className="p-3 bg-white rounded border">
        <strong>Data Science & Analytics:</strong> TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib, Predictive Modeling, Statistical Analysis, Data Storytelling
      </div>
      <div className="p-3 bg-white rounded border">
        <strong>Programming Languages:</strong> Java, Python, TypeScript, JavaScript, SQL
      </div>
      <div className="p-3 bg-white rounded border">
        <strong>Web Development & Databases:</strong> React, Node.js, Vite, HTML, CSS, Tailwind CSS, Material UI, PostgreSQL, MongoDB
      </div>
    </div>
  </div>
);