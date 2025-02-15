import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import Layout from '../components/Layout/Layout'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    // Check if typedRef.current is available
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Web Developer', 'UI/UX Designer', '3D Enthusiast'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, []) // Empty dependency array ensures this only runs on mount

  return (
    <Layout title='hero'>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"I'm "}a <span ref={typedRef}></span>
          </motion.h2>
          <motion.a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
        <div className="absolute inset-0 z-0">
          <div id="hero-particles" className="w-full h-full"></div>
        </div>
      </section>
    </Layout>
  )
}
