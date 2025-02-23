import { FaPhone, FaWhatsapp } from "react-icons/fa";

function FixedContactIcons() {
  return (
    <>  
         {/* WhatsApp Icon */}
    <a
      href="https://wa.me/212689770809"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center mb-2">
        <span>
          <FaWhatsapp size={25} color="white" />
        </span>
      </div>
    </a>

    {/* Phone Icon */}
    <a href="tel:+212689770809" target="_blank" rel="noopener noreferrer">
      <div className="bg-blue-600 p-4  rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
        <FaPhone size={25} color="white" />
      </div>
    </a>
    </>
  )
}

export default FixedContactIcons