
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"

export default function About() {
  return (
    <Layout title="About">

    <section id="about" className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Profile-IMG-Tooned"
              alt="Your Name"
              className="rounded-lg shadow-xl mx-auto"
              style={{ maxWidth: "80%" }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              Hello! {"I'm"} a passionate web developer and designer with a keen interest in creating immersive
              and interactive web experiences. With 3 years of experience in the industry, {"I've"} had the opportunity to
              work on a wide range of projects, from small business websites to large-scale web applications.
            </p>
            <p className="text-lg mb-4">
              My expertise lies in front-end development, with a strong focus on React, Three.js, and modern CSS
              frameworks like Tailwind. {"I'm"} always excited to push the boundaries of {"what's"} possible on the web,
              incorporating 3D elements, animations, and cutting-edge design techniques into my projects.
            </p>
            <p className="text-lg">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community events.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </Layout>

  )
}

