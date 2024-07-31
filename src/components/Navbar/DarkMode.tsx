import { useEffect, useState } from "react";
function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        alt="img"
        src="/src/assets/website/light-mode-button.png"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
        absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-1000"
        }`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <img
        alt="img"
        src="/src/assets/website/dark-mode-button.png"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}

export default DarkMode;
