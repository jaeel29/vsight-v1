import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SunIcon from "../../icons/accessoirs/sun-icon";
import MoonIcon from "../../icons/accessoirs/moon-icon";

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <MoonIcon toggleToDark={() => setTheme("dark")} />
      ) : (
        <SunIcon toggleThemes={() => setTheme("light")} />
      )}
    </>
  );
}

export default ToggleTheme;
