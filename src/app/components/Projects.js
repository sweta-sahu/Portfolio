'use client';
import { useState } from 'react';

const Projects = () => {
    const allProjects = [
        {
            title: "Wildfire Spread Forecasting & Reporting System",
            description: "Trained a Swin-V2 Transformer for wildfire forecasting and used a Mistral-7B LLM for report generation. Built a full-stack platform with React and FastAPI.",
            tags: ['React', 'FastAPI', 'PyTorch', 'Swin-V2', 'Mistral-7B', 'AWS'],
            githubUrl: "https://github.com/sweta-sahu/next-day-wildfire-spread-prediction-and-reporting"
        },
        {
            title: "Nutrition Analyzer - AI Powered Label Scanner",
            description: "Conceptualized an AI pipeline to analyze nutrition labels using OCR and NLP models. Created a full-stack analyzer with HTML/CSS/JS and FastAPI.",
            tags: ['FastAPI', 'T5', 'DistilBERT', 'OCR', 'NLP', 'Python'],
            githubUrl: "https://github.com/sweta-sahu/nutrition-analyzer"
        },
        {
            title: "Taxi Fare Prediction",
            description: "Engineered a machine learning model to accurately predict taxi fares based on various features like distance, time, and location.",
            tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
            githubUrl: "https://github.com/sweta-sahu/Taxi-Fare-Prediction"
        },
        {
            title: "Customer Churn Analysis",
            description: "Developed a classification model to predict customer churn, providing actionable insights for retention strategies.",
            tags: ['Python', 'Scikit-learn', 'Pandas', 'Classification'],
            githubUrl: "https://github.com/sweta-sahu/Customer-Churn-Analysis-Prediction"
        },
        {
            title: "Hospital Recommendation Chatbot",
            description: "Built a conversational AI to recommend hospitals based on user symptoms and location, improving access to healthcare information.",
            tags: ['Python', 'NLP', 'Chatbot', 'Flask', 'Machine Learning'],
            githubUrl: "https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot"
        },
        {
            title: "COVID-19 Analysis and Forecast",
            description: "Developed a time-series forecasting model to predict COVID-19 cases. Performed in-depth exploratory data analysis to visualize trends.",
            tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Time Series'],
            githubUrl: "https://github.com/sweta-sahu/COVID19-analysis-and-forecast"
        }
    ];

    const [showMore, setShowMore] = useState(false);
    const projectsToShow = showMore ? allProjects : allProjects.slice(0, 2);

    return (
        <section id="projects" className="py-24 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {projectsToShow.map(project => (
                    <div key={project.title} className="bg-gray-800 flex flex-col p-6 rounded-lg shadow-lg border border-gray-700 transform hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300">
                      <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 py-1 px-3 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                           GitHub
                        </a>
                      </div>
                    </div>
                ))}
            </div>
            {!showMore && allProjects.length > 2 && (
                <div className="text-center mt-12">
                    <button 
                        onClick={() => setShowMore(true)}
                        className="bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                        Show More
                    </button>
                </div>
            )}
          </div>
        </section>
    );
}
export default Projects;