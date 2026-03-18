import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Ao Vivo", href: "#player" },
  { label: "Sertanejo", href: "#culture" },
  { label: "App", href: "#app" },
  { label: "Contato", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24 md:h-32">
        {/* Desktop nav left */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Logo - centered on mobile, larger */}
        <a href="#hero" className="md:absolute md:left-1/2 md:-translate-x-1/2 mx-auto md:mx-0">
          <img
            src="/logo-a7sertanejo-hf.png"
            alt="A7 Sertanejo"
            className="h-16 md:h-24 w-auto drop-shadow-[0_0_15px_rgba(255,78,0,0.3)]"
          />
          <p classname="mx-auto font-display text-sm font-medium text-center" >Sempre com você!</p>
        </a>

        {/* Desktop nav right */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <motion.a
            href="#player"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 78, 0, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground font-display font-black px-6 py-2.5 rounded-full uppercase tracking-widest text-xs flex items-center gap-2"
          >
            Ouvir Agora <Play size={14} fill="currentColor" />
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-4 text-foreground z-50"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-header py-6"
          >
            <nav className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary text-lg font-display font-bold uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <motion.a
                href="#player"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground font-display font-black px-8 py-3 rounded-full uppercase tracking-widest text-sm flex items-center gap-2 mt-2"
              >
                Ouvir Agora <Play size={16} fill="currentColor" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
