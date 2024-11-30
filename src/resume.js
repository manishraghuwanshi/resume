import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <Header />
        <Summary />
        <Education />
        <WorkExperience
          experiences={[
            {
              title: "Junior Web Developer",
              company: "WebConnect Private Limited (SmartInfosys.net)",
              duration: "May 2023 - Sep 2024",
              responsibilities: [
                "Built and maintained websites using ReactJS, PHP, WordPress, and React Native.",
                "Developed a single-page application (SPA) for a sound production company with React Router and reusable components.",
                "Collaborated on cross-platform apps with real-time collaboration features.",
              ],
            },
          ]}
        />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
