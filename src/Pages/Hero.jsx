import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Layout from "../components/Layout/Layout";

const Hero = () => {
  const roles = ["Web Developer", "UI/UX Designer", "3D Enthusiast"];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const delayBetweenWords = 1500;

    const handleTyping = () => {
      if (!deleting && charIndex < roles[roleIndex].length) {
        setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setDeleting(true), delayBetweenWords);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100014521591779",
      icon: <FaFacebook />,
    },
    { href: "https://www.github.com/MOHAMED-LAAGUILI", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      icon: <FaLinkedin />,
    },
    {
      href: "https://discordapp.com/users/1316675038598139936",
      icon: <FaDiscord />,
    },
  ];

  const cvLinks = [
    { href: "/assets/docs/CV-EN.pdf", label: "CV 🇺🇸" },
    { href: "/assets/docs/CV-FR.pdf", label: "CV 🇫🇷" },
  ];


  const handleDownload = async (e, href) => {
    e.preventDefault();
    try {
      const response = await fetch(href);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = href.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <Layout title="hero">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/djmafhmnw/video/upload/f_auto:video,q_auto/v1/Portfolio/blackhole"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {"Hi, I'm MOHAMED LAAGUILI"}
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
             {" & I'm a"} <span className="text-blue-400">{currentText}</span>
              <span className="text-white animate-blink">|</span>
            </motion.h2>

            <motion.div
              className="flex justify-center space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {socialLinks.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white hover:text-purple-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl sm:text-3xl"
                  >
                    {icon}
                  </motion.div>
                </a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
    {cvLinks.map(({ href, label }) => (
        <motion.a
  key={label}
  href={href}
  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => handleDownload(e, href)}
>
  <FaDownload className="mr-2" />
  {label}
</motion.a>
        ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
