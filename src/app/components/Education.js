'use client';
import { useState } from 'react';

const Education = () => {
  const [showCourses, setShowCourses] = useState(false);

  const courses = {
    'Fall 2024': ['Introduction to Machine Learning', 'Data Intensive Computing', 'Algorithm Analysis and Design', 'Computer Security'],
    'Spring 2025': ['Deep Learning', 'Statistical Data Mining II', 'Data Models and Query Language', 'Operating Systems']
  };

  return (
    <section id="education" className="py-24 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center mb-12">Education</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h4 className="text-2xl font-bold">University at Buffalo, The State University of New York</h4>
            <p className="text-xl mt-2 text-cyan-400">Master of Science, Computer Science and Engineering</p>
            <p className="text-gray-400 mt-1">Expected: Dec 2025 | GPA: 3.92/4.0</p>
            <div className="mt-6">
              <button 
                onClick={() => setShowCourses(!showCourses)}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
              >
                {showCourses ? 'Hide' : 'View'} Relevant Coursework
                <svg className={`w-5 h-5 transition-transform duration-300 ${showCourses ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showCourses && (
                <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(courses).map(([semester, subjects]) => (
                    <div key={semester}>
                      <h5 className="font-semibold text-white mb-2">{semester}</h5>
                      <ul className="list-disc list-inside text-gray-300">
                        {subjects.map(subject => <li key={subject}>{subject}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h4 className="text-2xl font-bold">Ramrao Adik Institute of Technology</h4>
            <p className="text-xl mt-2 text-cyan-400">Bachelor of Engineering, Electronics and Telecommunications</p>
            <p className="text-gray-400 mt-1">Aug 2017 - Jun 2021 | Grade: 9.31/10.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;