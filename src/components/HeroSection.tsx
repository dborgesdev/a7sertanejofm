import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";
import heroEstrada from "@/assets/hero-estrada.jpg";
import heroDanca from "@/assets/hero-danca.jpg";
import heroFestival from "@/assets/hero-festival.jpg";
import heroPalco from "@/assets/hero-palco.jpg";
import heroPublico from "@/assets/hero-publico.jpg";

const slides = [heroArena, heroEstrada, heroDanca, heroFestival, heroPalco, heroPublico];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden bg-background flex flex-col">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              src={slides[current]}
              alt="A7 Sertanejo"
              className="w-full h-full object-cover brightness-110"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10" />

      {/* SOLUÇÃO: 
          1. pt-[120px] md:pt-[160px] -> Cria o espaço necessário para o Logo e Menu não sobreporem.
          2. justify-center + my-auto -> Centraliza o conteúdo no espaço útil que sobra.
      */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px] md:pt-[160px] pb-24 my-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-white">
              Ao Vivo
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          style={{ textWrap: "balance" }}
        >
          A batida que o seu
          <br />
          <span className="gradient-text drop-shadow-[0_2px_8px_rgba(255,78,0,0.4)]">coração entende.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white font-medium text-lg md:text-2xl font-body max-w-md mb-8 md:mb-10 drop-shadow-md"
        >
          A7 Sertanejo FM — Sempre com você!
        </motion.p>

        <motion.a
          href="#player"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 78, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground font-display font-black px-8 py-4 md:px-10 md:py-5 rounded-full uppercase tracking-widest text-xs md:text-sm flex items-center gap-3 orange-pulse"
        >
          Ouça Modão <Play size={20} fill="currentColor" />
        </motion.a>

        {/* Paginação do Slider posicionada em relação ao container flex-1 */}
        <div className="absolute bottom-6 flex gap-2 p-2 bg-black/20 backdrop-blur-sm rounded-full">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
