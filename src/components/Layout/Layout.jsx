// Props
import PropTypes from "prop-types";

//Head
import { Helmet, HelmetProvider } from "react-helmet-async";

// Components
import Footer from "./Footer.jsx";
import { useEffect, useState } from "react";
import Preloader from "../Preloader.jsx";
import Cursor from "../Cursor.jsx";
import Sidebar from "./SideBar.jsx";
import ThemeToggle from "../ThemeToggle.jsx";
import ScrollToTop from "../Scroll2Top.jsx";
import FixedContactIcons from "../FixedContactIcons.jsx";

export default function Layout({
  children,
  title = "MOHAMED LAAGUILI - Full Stack Web Developer",
  description = "Full stack Developer (HTML - CSS - JS - React/Vite - Node/Express - Laravel).",
  keywords = "Mohamed, Laaguili, Front-End developer, developer, mern, react",
  author = "MOHAMED LAAGUILI",
  ogImage_512x512 = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",
  email = "mohamed.dev.2001@gmail.com",
  year = `${new Date().getFullYear()}`,
  language = "en",
  siteUrl = "https://react-vite-portfolio-mu.vercel.app",
  version = "1.0.0",
  topic = "Portfolio",
  color = "#ffffff",
  favicon_icon = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",
  favicon_png = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/512x512",
  favicon_16x16 = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/16x16",
  favicon_32x32 = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/32x32",
  favicon_48x48 = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/48x48",
  favicon_192x192 = "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/192x192",
}) {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  const themeColor = isDarkMode ? "#1a202c" : "#ffffff";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the page is fully loaded before removing the preloader
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // If already loaded, hide the preloader immediately
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
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
        <meta property="og:title" content={title} />
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

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}

      <main className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        {children}
      </main>

      <div>
        <Cursor />
      </div>

      <div className="fixed top-5 right-5 z-[100]">
        <ThemeToggle />
      </div>

      <div className="fixed bottom-5 right-5 space-y-5 z-50">
        <FixedContactIcons />
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
