"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const workExperience = {
  company: "Sofyrus Technologies Pvt Ltd",
  period: "Aug 2023 - Present",
  role: "----->Backend Developer<-------",
  responsibilities: [
    "Led the development of the backend for a microservice-oriented Medical Management System, focusing on reducing API response by 10 times. Key responsibilities included designing, implementing, and optimizing CRUD APIs.",
    "Leveraged GitHub for project management, deploying modules, and releasing builds.",
    "Collaborated closely with frontend developers to ensure seamless integration and worked alongside QA professionals to maintain high-quality standards throughout the development process.",
    "Developed and engineered the backend infrastructure for diverse modules within the DMW application, serving manufacturers, innovators, enquiry and regulatory affairs.",
    "Utilized NestJS to architect robust APIs following a microservice-based architecture, ensuring scalability and efficiency."
  ]
};

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/bg-4.jpg)"}}
     className='w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover '>
      <div className='text-center bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition duration-300 ease-in-out  '>
        <h2 className='text-xl font-bold text-white '>{workExperience.company} ({workExperience.period})</h2>
        <p className='text-lg text-white font-bold '>{workExperience.role}</p>
        <ul className='list-disc text-left mx-auto max-w-prose text-black font-bold'>
          {workExperience.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page