import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";

const accentThemes = [
  { name: "Cyan", hue: "175 80% 50%", hue2: "200 80% 55%" },
  { name: "Purple", hue: "265 80% 60%", hue2: "280 80% 65%" },
  { name: "Emerald", hue: "155 70% 45%", hue2: "170 70% 50%" },
  { name: "Orange", hue: "25 95% 55%", hue2: "35 95% 60%" },
  { name: "Rose", hue: "345 80% 60%", hue2: "355 80% 65%" },
  { name: "Blue", hue: "220 80% 55%", hue2: "235 80% 60%" },
];

const ThemeCustomizer = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeTheme, setActiveTheme] = useState("Cyan");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const savedMode = localStorage.getItem("portfolio-mode");
    if (saved) {
      const theme = accentThemes.find((t) => t.name === saved);
      if (theme) applyAccent(theme);
      setActiveTheme(saved);
    }
    if (savedMode === "light") {
      setIsDark(false);
      applyMode(false);
    }
  }, []);

  const applyAccent = (theme: (typeof accentThemes)[0]) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.hue);
    root.style.setProperty("--accent", theme.hue);
    root.style.setProperty("--ring", theme.hue);
    root.style.setProperty("--sidebar-primary", theme.hue);
    root.style.setProperty("--sidebar-ring", theme.hue);
    root.style.setProperty(
      "--gradient-primary",
      `linear-gradient(135deg, hsl(${theme.hue}), hsl(${theme.hue2}))`
    );
    root.style.setProperty(
      "--gradient-hero",
      `linear-gradient(135deg, hsl(${theme.hue} / 0.15), hsl(${theme.hue2} / 0.05))`
    );
    root.style.setProperty(
      "--glow-primary",
      `0 0 30px hsl(${theme.hue} / 0.3)`
    );
    root.style.setProperty(
      "--text-gradient",
      `linear-gradient(135deg, hsl(${theme.hue}), hsl(${theme.hue2}))`
    );
  };

  const applyMode = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--background", "220 20% 7%");
      root.style.setProperty("--foreground", "210 20% 92%");
      root.style.setProperty("--card", "220 18% 10%");
      root.style.setProperty("--card-foreground", "210 20% 92%");
      root.style.setProperty("--secondary", "220 16% 16%");
      root.style.setProperty("--secondary-foreground", "210 20% 85%");
      root.style.setProperty("--muted", "220 14% 14%");
      root.style.setProperty("--muted-foreground", "215 15% 55%");
      root.style.setProperty("--border", "220 14% 18%");
      root.style.setProperty("--input", "220 14% 18%");
      root.style.setProperty("--primary-foreground", "220 20% 7%");
    } else {
      root.style.setProperty("--background", "0 0% 98%");
      root.style.setProperty("--foreground", "220 20% 10%");
      root.style.setProperty("--card", "0 0% 100%");
      root.style.setProperty("--card-foreground", "220 20% 10%");
      root.style.setProperty("--secondary", "220 14% 92%");
      root.style.setProperty("--secondary-foreground", "220 16% 30%");
      root.style.setProperty("--muted", "220 14% 95%");
      root.style.setProperty("--muted-foreground", "215 15% 45%");
      root.style.setProperty("--border", "220 14% 88%");
      root.style.setProperty("--input", "220 14% 88%");
      root.style.setProperty("--primary-foreground", "0 0% 100%");
    }
  };

  const handleAccent = (theme: (typeof accentThemes)[0]) => {
    setActiveTheme(theme.name);
    applyAccent(theme);
    localStorage.setItem("portfolio-theme", theme.name);
  };

  const toggleMode = () => {
    const next = !isDark;
    setIsDark(next);
    applyMode(next);
    localStorage.setItem("portfolio-mode", next ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-56 bg-card border border-border rounded-xl p-4 shadow-xl"
          >
            <p className="text-xs text-muted-foreground mb-3 font-mono">
              Theme Customizer
            </p>

            {/* Light/Dark */}
            <button
              onClick={toggleMode}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-secondary text-foreground text-sm mb-4 hover:bg-secondary/80 transition-colors"
            >
              <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
              {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
            </button>

            {/* Accent colors */}
            <p className="text-xs text-muted-foreground mb-2">Accent Color</p>
            <div className="grid grid-cols-3 gap-2">
              {accentThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleAccent(theme)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                    activeTheme === theme.name
                      ? "bg-secondary ring-1 ring-primary"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full border border-border"
                    style={{ background: `hsl(${theme.hue})` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        style={{ boxShadow: "var(--glow-primary)" }}
      >
        <HiOutlinePaintBrush size={22} />
      </button>
    </div>
  );
};

export default ThemeCustomizer;
