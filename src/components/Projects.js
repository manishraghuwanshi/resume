import React from "react";

const Projects = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">
        Projects
      </h2>
      <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
        <li>
          <strong>Budget Petrol:</strong> A web app to track and optimize fuel expenses.
        </li>
        <li>
          <strong>TaskMax:</strong> A cross-platform task management app with features like task
          assignment, delegation, and real-time collaboration.
        </li>
      </ul>
    </section>
  );
};

export default Projects;
