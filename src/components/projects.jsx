import portfolioFace from '../assets/portfolioFace.jpg'
import is from '../assets/integrationSystem.jpg'
import k from '../assets/KOTAK.png'
import um from '../assets/top-user.jpeg'
import { useState } from 'react'
export const Projects = () => {
  const [readMore, setReadMore] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      date: "Feb 2025",
      description:
        "A personal website showcasing my skills, experience, and projects, designed to highlight My expertise as a developer and creative professional.",
      image: portfolioFace,
      technologies: ["React Js", "Tailwind CSS"],
      github: "https://rupasravanihub.github.io/Portfolio/"
    },
    {
      id: 2,
      title: "Clone Kotak ATM",
      date: "oct 2024",
      description: "A responsive web application replicating the Kotak Mahindra Bank UI, designed to provide a seamless banking experience.",
      image: k,
      technologies: ["Html", "CSS", "BootStrap", "PhpMysql"],
      github: "https://github.com/rupaSravaniHub/ATM_Kotak",
    },
    {
      id: 3,
      title: "Integration system",
      date: "Aug 2024",
      description:
        "Developed a real-time Integration Scenario Management System with a user-friendly interface for seamless scenario creation, management, and monitoring.",
      image: is,
      technologies: ["React Js", "Bootstrap", "Material-UI", "MySQL", "MongoDB", "Java", "Spring Boot", "activeMq", "Apache camel"],
      github: "https://github.com/rupaSravaniHub/Arm_backend_code",
    },
    {
      id: 4,
      title: "User Management system",
      date: "Nov 2024",
      description:
        "Developed a User & Role Management System, enabling users to add, update, view, and delete roles, users, and modules. Implemented pagination for efficient data handling and streamlined access control",
      image: um,
      technologies: ["React", "Bootstrap", "MySQL", "Java", "Spring Boot"],
      github: "https://github.com/rupaSravaniHub/miniProject",
    },
  ];


  return (
    <div className='bg-black text-white py-10' id='Projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-5'>Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img className="w-100 h-35 object-cover rounded-lg mb-4
               transform transition-transform duration-300 hover:scale-105" src={project.image} alt={project.title} />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.date}</p>
                <p className="text-gray-300 mt-2 inline">
                  {readMore ? project.description : `${project.description.slice(0, 50)}...`}
                </p>
                <span
                  onClick={() => setReadMore(!readMore)}
                  className="text-white ml-1"
                >
                  {readMore ? 'Read Less' : 'Read More'}
                </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}