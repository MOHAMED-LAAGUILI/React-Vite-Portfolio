// Props
import PropTypes from "prop-types";

//Head
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Footer from "./Footer.jsx";
import Navbar from "./NavBar.jsx";

export default function Layout({
  children,
  title = "MOHAMED LAAGUILI - Developer",
  description = "MERN stack Developer (HTML - CSS - JS - React/Vite - Node/Express - MongoDB - Git ).",
  keywords = "Mohamed, Laaguili, Front-End developer, developer, mern, react",
  author = "MOHAMED LAAGUILI",
  favicon = "/path-to-your/favicon.ico",
  ogImage = "https://yourwebsite.com/path-to-image.jpg",
}) {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  const themeColor = isDarkMode ? "#1a202c" : "#ffffff";

  return (
    <HelmetProvider>
      {/* Global Head Data */}
      <Helmet>
        {/* SEO Meta Tags */}
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={themeColor} />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon */}
        <link rel="icon" href={favicon} type="image/x-icon" />

        {/* External Styles and Scripts */}
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"  rel="stylesheet" />

<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>

         {/* Icons */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      </Helmet>
{/* Navbar */}
      <Navbar/>

{/* Main Content */}
      <main
        style={{ minHeight: "79.5vh" }}
        className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-900 transition-colors duration-500">
        {children}
      </main>

{/* Footer */}
      <Footer />

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
};
