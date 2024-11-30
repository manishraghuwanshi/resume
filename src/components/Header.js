import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">Manish Raghuwanshi</h1>
      <p className="text-lg mt-2">Web and App Developer</p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
        <a
          href="mailto:manishraghuwanshiofficial@gmail.com"
          className="text-blue-200 hover:underline"
        >
          manishraghuwanshiofficial@gmail.com
        </a>
        <span className="text-blue-200">|</span>
        <a
          href="https://github.com/manishraghuwanshi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 hover:underline"
        >
          GitHub
        </a>
        <span className="text-blue-200">|</span>
        <a
          href="https://www.linkedin.com/in/manishraghuwanshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
