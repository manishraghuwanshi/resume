import React from "react";

const Skills = () => {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-800 pb-2">
        Skills
      </h2>
      <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
        <li>
          <strong>Web Technologies:</strong> HTML, CSS, JavaScript, Tailwind, ReactJS, WordPress,
          PHP, Node.js, Express.js
        </li>
        <li>
          <strong>Mobile:</strong> React Native
        </li>
        <li>
          <strong>Database:</strong> MongoDB, MySQL
        </li>
        <li>
          <strong>Languages:</strong> Python, Java
        </li>
      </ul>
    </section>
  );
};

export default Skills;
