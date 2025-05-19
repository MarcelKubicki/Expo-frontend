import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const root = document.documentElement;

  useEffect(
    function () {
      if (isDark) {
        localStorage.setItem("theme", "dark");
        root.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        root.classList.remove("dark");
      }
    },
    [isDark]
  );

  return { isDark, setIsDark };
}
