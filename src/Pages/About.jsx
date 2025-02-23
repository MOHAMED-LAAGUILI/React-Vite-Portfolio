import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Heading */}
          <motion.h2
            className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center">
            {/* Image */}
            <motion.div
              className="w-full md:w-5/12 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <img
                src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Profile-IMG-Tooned"
                alt="MOHAMED LAAGUILI"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-80 md:w-full"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full md:w-7/12 mt-8 md:mt-0 md:pl-12 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hello! {"I'm"} a passionate **web developer** and **UI/UX designer** with an eye for detail and a
                love for crafting **immersive** and **interactive** digital experiences. Over the past **5 years**, I've
                built everything from **small business websites** to **complex web applications**.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My expertise includes **React.js, Three.js, Tailwind CSS**, and modern UI frameworks. I enjoy blending
                **design & functionality**, leveraging **3D animations**, and exploring **cutting-edge technologies** to push
                web development forward.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When {"I'm"} not coding, I explore **new tech trends**, contribute to **open-source projects**, and share
                knowledge through **blogging & community events**.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
