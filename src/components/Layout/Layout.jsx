// Props
import PropTypes from "prop-types";

//Head
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Footer from "./Footer.jsx";
import { useEffect, useState } from "react";
import Preloader from "../Preloader.jsx";
import Cursor from "../Cursor.jsx";
import Sidebar from './SideBar.jsx';
// import ThemeToggle from "../ThemeToggle.jsx";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "../Scroll2Top.jsx";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
  title = "MOHAMED LAAGUILI - Developer",
  description = "MERN stack Developer (HTML - CSS - JS - React/Vite - Node/Express - MongoDB - Git ).",
  keywords = "Mohamed, Laaguili, Front-End developer, developer, mern, react",
  author = "MOHAMED LAAGUILI",
  ogImage_512x512 = "",
  email = "",
  year = `${new Date().getFullYear()}`,
  language = "en",
  siteUrl = "",
  version = "1.0.0",
  topic = "Business",
  color = "#ffffff",
  favicon_icon = "",
  favicon_png = "",
  favicon_16x16 = "",
  favicon_32x32 = "",
  favicon_48x48 = "",
  favicon_192x192 = "",
}) {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  const themeColor = isDarkMode ? "#1a202c" : "#ffffff";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading time
    return () => clearTimeout(timer);

    
  }, []);

  

     
    
  if (loading) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      {/* Global Head Data */}
      <Helmet>
         {/* SEO Meta Tags */}
         <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={themeColor} />
        <meta name="version" content={version} />
        <meta name="category" content={topic} />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="topic" content={topic} />
        <meta name="copyright" content={`© ${year}`} />
        <meta name="reply-to" content={email} />
        <meta name="owner" content={author} />
        <meta name="language" content={language} />
        <meta name="subject" content={description} />

        {/*   <!-- Caching and Performance Meta --> */}
        <meta httpEquiv="Cache-Control" content="max-age=86400, public" />
        <meta
          httpEquiv="Expires"
          content={`Fri, 10 Aug ${year} 20:00:00 GMT`}
        />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content={siteUrl} />

        {/*   <!-- Search Engine Bots --> */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/*   <!-- security meta --> */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-Powered-By" content={author} />

        {/*   <!-- Open Graph Meta for Social Media --> */}
        <meta property="og:title" content={author} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage_512x512} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content={author} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language} />

        {/*  <!--  Twitter Card Meta -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={email} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={author} />

        {/*  <!--  Favicons -->*/}
        <link rel="icon" href={favicon_icon} type="image/x-icon" />
        <link rel="icon" type="image/png" href={favicon_png} />
        <link rel="apple-touch-icon" href={favicon_icon} />
        <link rel="icon" sizes="16x16" href={favicon_16x16} />
        <link rel="icon" sizes="32x32" href={favicon_32x32} />
        <link rel="icon" sizes="48x48" href={favicon_48x48} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={favicon_192x192}
        />
        <link rel="mask-icon" href={favicon_icon} color={color} />
        <meta name="msapplication-TileImage" href={favicon_icon} />

        {/*   <!-- Theme & Mobile Web App Meta --> */}
        <meta name="theme-color" content={color} />
        <meta name="msapplication-navbutton-color" content={color} />
        <meta name="msapplication-TileColor" content={color} />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
         </Helmet>

 {/* Toaster for Hot Toast */}
      <Toaster />


{/* Sidebar */}
<Sidebar />


{/* Main Content */}

<div id="particles-js" className="absolute inset-0 z-0"></div>

<main className=" dark:bg-gray-800 dark:text-gray-100 min-h-screen">
  {children}
</main>





      <Cursor />

{/*
  <div className="fixed top-5 right-5 z-[100]">
<ThemeToggle />
</div>
*/}
<div className="fixed bottom-5 right-5 space-y-5 z-50">
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
      </div>
{/* Footer */}
      <Footer />

      {/* ScrollToTop Icon */}
      <ScrollToTop />

    </HelmetProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  favicon: PropTypes.string,
  ogImage: PropTypes.string,
  email: PropTypes.string,
  year: PropTypes.string,
  language: PropTypes.string,
  siteUrl: PropTypes.string,
  version: PropTypes.string,
  topic: PropTypes.string,
  color: PropTypes.string,
  ogImage_512x512: PropTypes.string,
  favicon_icon: PropTypes.string,
  favicon_png: PropTypes.string,
  favicon_16x16: PropTypes.string,
  favicon_32x32: PropTypes.string,
  favicon_48x48: PropTypes.string,
  favicon_192x192: PropTypes.string,
};
