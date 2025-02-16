import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and creative problem-solving skills brought our project to life in ways we hadn't even imagined.",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    content:
      "The level of expertise in 3D web development is truly impressive. Our product configurator has received overwhelmingly positive feedback from our customers.",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Founder, WebVision",
    content:
      "I've worked with many developers over the years, but few have shown the same level of dedication and skill. The results speak for themselves - our website traffic has increased by 200% since launch.",
    avatar: "/avatar3.jpg",
  },
]

export default function Testimonials() {



  return (
            <Layout title="projects">
    
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="relative">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 h-full flex flex-col justify-between"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <p className="text-gray-400 mb-4">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
            </Layout>
    
  )
}

