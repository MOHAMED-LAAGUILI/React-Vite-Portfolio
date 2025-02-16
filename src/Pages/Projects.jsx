
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout/Layout'

const projects = [
  {
    id: 1,
    title: '3D Product Configurator',
    description: 'An interactive 3D product configurator built with Three.js and React.',
    image: 'https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/Next-Shadcn-AdminDashboard',
    tags: ['React', 'Three.js', 'WebGL'],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    image: 'https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/React-Redux-Ecommerce-App',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot using natural language processing for customer support.',
    image: 'https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Projects/react-weather-api',
    tags: ['Python', 'TensorFlow', 'React'],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
        <Layout title="projects">
    
    <section id="projects" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
    
  )
}
