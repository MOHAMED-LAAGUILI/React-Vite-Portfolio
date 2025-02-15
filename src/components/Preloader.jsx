import { useEffect, useState } from "react";
import { tailChase } from "ldrs";

tailChase.register();

function Preloader() {
  const [theme, setTheme] = useState("light");

  // Detect theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${theme == "dark" ? "bg-black" :"bg-white"} z-50 transition-opacity duration-500 ease-in-out`}>
      <l-tail-chase
        size="60"
        speed="2"
        color={theme != "light" ? "#ffffff" : "#3758F9"}
        className="animate-fade-in">

      </l-tail-chase>
    </div>
  );
}

export default Preloader;