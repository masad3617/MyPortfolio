import React from "react";

const ExperienceForm = () => {
  return (
    <div className="experience-form">
      <h2 className="text-2xl font-bold mb-5 text-white">Experience</h2>
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-200">Sofyrus Technologies Pvt Ltd</h3>
        <p className="text-sm text-gray-200">Aug 2023 - Present: Backend Developer</p>
        <ul className="list-disc ml-5 text-sm text-gray-200">
          <li>Led the development of the backend for a microservice-oriented Medical Management System, focusing on reducing API response times by 10 times. Key responsibilities included designing, implementing, and optimizing CRUD APIs.</li>
          <li>Leveraged GitHub for project management, deploying modules, and releasing builds.</li>
          <li>Collaborated closely with frontend developers to ensure seamless integration and worked alongside QA professionals to maintain high-quality standards throughout the development process.</li>
          <li>Developed and engineered the backend infrastructure for diverse modules within the DMW application, serving manufacturers, innovators, enquiry and regulatory affairs.</li>
          <li>Utilized NestJS to architect robust APIs following a microservice-based architecture, ensuring scalability and efficiency.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceForm;