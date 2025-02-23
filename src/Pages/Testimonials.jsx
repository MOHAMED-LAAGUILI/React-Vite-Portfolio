import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";import Layout from "../components/Layout/Layout";

const testimonials = [
  {
    id: 1,
    name: "Mounssif BOUHLAOUI",
    job: "Lead Software Engineer at ALX Morocco",
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Mounssif-BOUHLAOUI",
    text: "I'm 31 years old, I saw many people, I know gold people when I see them or their work and creativity. KEEP GOING BRO! THERE ARE AMAZING OPPORTUNITIES in your way, just keep pushing ❤",
    socialLinks: { linkedin: "https://linkedin.com/in/mounssif-bouhlaoui" },
  },
  {
    id: 2,
    name: "Khaoula El Fels",
    job: "Bachelor in Computer Science Development",
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/Khaoula-el-fels",
    text: "Wow, Mohamed! 🎉 Huge congratulations to you! You’re such a brilliantly innovative and endlessly creative person—always full of bright ideas and determination.🌟 Keep up the amazing work and continue to inspire everyone around you! ...",
    socialLinks: {},
  },
  {
    id: 3,
    name: "Ayman Rossi El Hassani",
    job: "Computer Science Engineer",
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/AymanRouusi",
    text: "Hey Mohamed! 🎉Working alongside you has been nothing short of inspiring. Your ideas are like sparks, igniting solutions and creativity in every project we’ve tackled together. 💡🔥 Beyond your skills, it’s your kindness and collaborative spirit that truly make you shine.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ayman-rossi-el-hassani-9b6714210/",
    },
  },
  {
    id: 4,
    name: "Laila MLAIJI",
    job: "Director at MIAGE Institution of IT",
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/laila-mlaiji",
    text: "Dear Mohamed, 🌟 It has been an absolute honor watching you grow into such a talented and driven individual. Your journey is a testament to your hard work, innovation, and the sheer determination to reach great heights. As you step into the next phase of your career...",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/laila-mlaiji-b8551615b/",
    },
  },
  {
    id: 5,
    name: "Soufiane",
    job: "IT Teacher at MIAGE Institution of IT",
    image:
      "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/Testimoniales/prof-soufiane",
    text: "Dear Mohamed, 👨‍🏫 You have always stood out, not just for your academic excellence but for your unquenchable thirst for knowledge and innovation. Your passion, coupled with your humility and dedication, has made teaching you a truly rewarding experience.",
    socialLinks: {},
  },
];

export default function Testimonials() {

  return (
    <Layout title="Testimonials">

<section className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className=""
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{testimonial.text}</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4"
                />
                <h3 className="text-lg font-semibold dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.job}</p>
                {testimonial.socialLinks.linkedin && (
                  <a
                    href={testimonial.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-500 hover:text-blue-400"
                  >
                    <FaLinkedin size={25} />
                  </a>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    </Layout>

  );
}
