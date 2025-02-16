import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="relative text-white py-8 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/djmafhmnw/video/upload/f_auto:video,q_auto/v1/Portfolio/spacehole"
        type="video/webm"/>
      Your browser does not support the video tag.
    </video>
      
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-8 md:px-16 lg:px-24 z-10 bg-black bg-opacity-60 rounded-lg py-6 text-center">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512" 
            alt="Logo"
            className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-lg mb-3"
          />
          <h3 className="text-3xl font-extrabold text-white">Mohamed LAAGUILI</h3>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; 2022 - {new Date().getFullYear()} All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6 my-4 md:my-0">
            <Link to="#" className="text-gray-300 hover:text-white text-2xl">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white text-2xl">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white text-2xl">
              <FaLinkedin />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white text-2xl">
              <FaGithub />
            </Link>
          </div>

         

        </div>
      </div>
    </footer>
  );
};

export default Footer;
