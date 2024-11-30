import React from "react";

const WorkExperience = ({ experiences }) => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">
        Work Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mt-4">
          <h3 className="font-bold text-gray-800">{exp.title}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-gray-600">{exp.duration}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
