import { useState, useEffect } from "react";
import Knight from "../assets/knight.svg";

interface BlogHolderProps {
    Page: React.FC;
}

const BlogHolder: React.FC<BlogHolderProps> = ({Page}) => {

    const [dark, setDark] = useState<boolean>(false);

  
  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
      return;
    }

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
      return;
    }

    
    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  
  const toggleTheme = (): void => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    const isDark: boolean = html.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };


    return (
        <div className="min-h-screen bg-bg text-text transition-colors duration-300">
         <header className="sticky top-0 z-50 flex justify-between items-center py-3 px-6 bg-surface border-b border-border backdrop-blur">
        <div className="flex items-center gap-4">
          <img
            src={Knight}
            alt="Knight"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <h1 className="text-3xl font-bold">Knights Time</h1>
            <p className="text-muted">
              It's time for knights to shine wake up
            </p>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition cursor-pointer"
          style={{ color: "var(--color-text)" }}
        >
          {dark ? "Switch to Light" : "Switch to Dark"}
          
        </button>
      </header>
            <Page />
        </div>
    );
}

export default BlogHolder;