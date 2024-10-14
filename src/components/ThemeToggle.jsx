import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>

      <span
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="p-2 px-3 bg-gray-700 text-white rounded-md"
      >
        {isDarkMode ? (
          <i className="uil uil-brightness"></i>
        ) : (
          <i className="uil uil-moon-eclipse"></i>
        )}
      </span>
    </>
  );
};


// to use that them toggler just add the following  <ThemeToggle /> to the palce u wanna be
export default ThemeToggle;
