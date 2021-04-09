import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// import SunIcon from "../icons/sun-icon";
// import MoonIcon from "../icons/moon-icon";

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <h4>The current theme is: {theme}</h4>
    </div>
  );
}

export default ToggleTheme;
