import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SunIcon from "../../icons/sun-icon";
import MoonIcon from "../../icons/moon-icon";

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const style = {
    position: "fixed",
    top: "200px",
    right: "0",
    padding: ".7rem",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    color: "white",
    backgroundColor: "var(--theme-bg)",
  };

  return (
    <div style={style}>
      {theme === "light" ? (
        <MoonIcon toggleToDark={() => setTheme("dark")} />
      ) : (
        <SunIcon toggleThemes={() => setTheme("light")} />
      )}
    </div>
  );
}

export default ToggleTheme;
