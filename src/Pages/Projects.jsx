import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { FaGithub, FaLink } from "react-icons/fa";

const portfolioItems = [
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/MERN-Ecommerce-App",
    title: "MERN E-commerce App",
    description: "Full-stack e-commerce site, responsive and complete",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/MERN-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Express-ChatApp",
    title: "React Express ChatApp",
    description: "Real-time chat app with session support",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Express-ChatApp",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App",
    title: "React Redux E-commerce",
    description: "Enhanced e-commerce with Redux for state management",
    link: "https://react-redux-ecommerce-app-hvhb.vercel.app/",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Redux-Ecommerce-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/Next-Shadcn-AdminDashboard",
    title: "Next Dashboard",
    description: "Admin Dashboard, built with ShadCn UI & Next",
    link: "https://next-shadcn-admin-dashboard-ochre.vercel.app/",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/Next-Shadcn-AdminDashboard",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Movies-Api-Sites",
    title: "Movies/Tv Shows Api",
    description: "A Movies/Tv Shows Site to See and find all specs about",
    link: "https://react-movie-tmdb-api-app.vercel.app",
    githubLink: "https://github.com/MOHAMED-LAAGUILI/React-Movie-TMDBApi-App",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-next-clerk-sanity-ecommerce",
    title: "Modern E-commerce Site",
    description: "E-commerce made with next clerk stripe & sanity",
    link: "https://react-next-clerk-sanity-ecommerce.vercel.app",
    githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Next-Clerk-Sanity-Ecommerce",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api",
    title: "Weather App",
    description: "made with react and context api styled with tailwind",
    link: "https://react-weather-api-app-ashy.vercel.app",
     githubLink: "https://github.com/MOHAMED-LAAGUILI/react-weather-api-app",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/storyteller-openai-ts-gpt-script",
    title: "Ai Story Teller",
    description:
      "AI powered with agents streams live interaction uses model gpt-4o to convert words to sketch",
    link: "https://storyteller-openai-ts-gpt-script.vercel.app",
     githubLink:
      "https://github.com/MOHAMED-LAAGUILI/storyteller-openai-ts-gpt-script",
  },
  {
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-vite-tailwind-start-template2",
    title: "Business Template for startups",
    description:
      "Business Template for startups made with React and tailwind modern design and enhanced With SEO and PWA",
    link: "https://react-vite-tailwind-start-template2.vercel.app/",
     githubLink:
      "https://github.com/MOHAMED-LAAGUILI/React-Vite-Tailwind-StartTemplate2",
  },
];


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Layout title="Projects">
    <section id="projects" className="portfolio">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Featured Projects
      </h2>
      <ul className="portfolio-filters">
        {/* Add filter buttons if needed */}
      </ul>
      <div className="portfolio-items">
        {portfolioItems.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-item"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="portfolio-item-image"
            />
            <div className="overlay">
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      title="GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      title="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="dark:bg-gray-800 bg-white p-8 rounded-lg max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">{selectedProject.title}</h3>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg border"
        />
        <p className="text-gray-400 mb-4">{selectedProject.description}</p>
        <div className="flex flex-wrap mb-4">
          {selectedProject.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {selectedProject.githubLink && (
            <a
              href={selectedProject.githubLink}
              title="GitHub Repository"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FaGithub size={25} className="dark:text-white" />
            </a>
          )}
          {selectedProject.link && (
            <a
              href={selectedProject.link}
              title="Live Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
                         <FaLink size={25} className="dark:text-white" />

            </a>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setSelectedProject(null)}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  </Layout>
  );
}