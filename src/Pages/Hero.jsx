import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';
import { FaDiscord, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Web Developer', 'UI/UX Designer', '3D Enthusiast'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  const handleDownloadCV = () => {
    toast.custom((t) => (
      <div
        className={`flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-4 rounded-xl shadow-lg border border-blue-500 ${
          t.visible ? 'animate-fadeIn' : 'animate-fadeOut'
        }`}
      >
        <p className="mb-2 text-lg font-semibold">Choose Your CV Version</p>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              window.open('../assets/docs/CV_FR.pdf', '_blank');
            }}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition"
          >
            FR CV
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              window.open('../assets/docs/CV_EN.pdf', '_blank');
            }}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md transition"
          >
            EN CV
          </button>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="mt-3 text-sm text-gray-400 hover:text-gray-300"
        >
          ❌ Cancel
        </button>
      </div>
    ));
  };

  return (
    <Layout title="hero">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/djmafhmnw/video/upload/f_auto:video,q_auto/v1/Portfolio/blackhole"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0"></div>
        <div className="text-center z-10 px-6">
          <div className="bg-black/20 backdrop-blur-md opacity-90 text-white mx-10 p-6 rounded-lg">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white tracking-wide"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi my name is MOHAMED LAAGUILI
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl mt-4 text-gray-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {"& I'm "} a <span ref={typedRef} className="text-white font-semibold"></span>


                  <div className="flex justify-center space-x-6 my-6 md:my-5 ">
                            <Link to="https://www.facebook.com/profile.php?id=100014521591779" className="text-gray-100 hover:text-white text-2xl" target='_blank'>
                              <FaFacebook size={40}/>
                            </Link>
                            <Link to="https://www.github.com/MOHAMED-LAAGUILI" className="text-gray-100 hover:text-white text-2xl" target='_blank'>
                            <FaGithub size={40}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/mohamedlaaguili2001/" className="text-gray-100 hover:text-white text-2xl" target='_blank'>
                              <FaLinkedin size={40}/>
                            </Link>
                            <Link to="https://discordapp.com/users/1316675038598139936" className="text-gray-100 hover:text-white text-2xl" target='_blank'>
                              <FaDiscord size={40}/>
                            </Link>
                          </div>
            
            </motion.h2>
            <motion.button
              onClick={handleDownloadCV}
              className="mt-6 px-8 py-3 text-white font-semibold text-lg rounded-full shadow-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex gap-2">
                <FaDownload size={25} /> Download CV
              </span>
            </motion.button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
