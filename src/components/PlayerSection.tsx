import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";
import heroEstrada from "@/assets/hero-estrada.jpg";
import heroDanca from "@/assets/hero-danca.jpg";
import heroFestival from "@/assets/hero-festival.jpg";
import heroPalco from "@/assets/hero-palco.jpg";
import heroPublico from "@/assets/hero-publico.jpg";

const images = [
  heroArena,
  heroEstrada,
  heroDanca,
  heroFestival,
  heroPalco,
  heroPublico,
];

const PlayerSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="player" className="py-20 md:py-32 bg-stage-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio size={20} className="text-primary" strokeWidth={1.5} />
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
              No Ar
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter">
            Nossa Playlist
            <br />
            Você ouve e ama
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-texas-dark/30 max-w-5xl mx-auto"
        >
          {/* Slideshow background */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                width={1920}
                height={1080}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-texas-dark via-texas-dark/10 to-transparent" />

            {/* Equalizer bars */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-secondary/80"
                  animate={{
                    height: [8, Math.random() * 30 + 10, 8],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player iframe */}
          <div className="relative bg-texas-dark">
            <iframe
              src="https://player.srvvox.com.br/player-topo-html5/7700/000000"
              className="h-10 sm:h-20 w-full border-0"
              title="Texas Brasil FM - Player ao vivo"
              allow="autoplay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayerSection;
