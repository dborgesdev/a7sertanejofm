import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";
import heroEstrada from "@/assets/hero-estrada.jpg";
import heroDanca from "@/assets/hero-danca.jpg";
import heroFestival from "@/assets/hero-festival.jpg";
import heroPalco from "@/assets/hero-palco.jpg";
import heroPublico from "@/assets/hero-publico.jpg";

const carouselImages = [heroArena, heroEstrada, heroDanca, heroFestival, heroPalco, heroPublico];

const PlayerSection = () => {
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
            Nossa Playlist<br />
            Você ouve e ama
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Player iframe */}
          <div className="glass-card rounded-2xl p-2 md:p-3 shadow-ember mb-6">
            <div className="rounded-xl overflow-hidden h-[40px] sm:h-[60px]">
              <iframe
                src="https://player.hdradios.net/player-topo-html5/6918/000000"
                className="w-full h-full border-0"
                allow="autoplay"
                title="A7 Sertanejo Player"
                loading="lazy"
              />
            </div>
          </div>

          {/* Infinite image carousel */}
          <div className="overflow-hidden rounded-2xl relative">
            {/* Overlay opcional para suavizar as bordas do carrossel */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
            <div className="flex animate-scroll-infinite">
              {[...carouselImages, ...carouselImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="A7 Sertanejo"
                  {/* brightness-110: Aumenta o brilho em 10%
                      contrast-110: Melhora a definição para as cores não ficarem lavadas
                      opacity-90: Deixa levemente translúcido para fundir melhor com o fundo (opcional)
                  */}
                  className="h-28 md:h-40 w-auto object-cover flex-shrink-0 brightness-110 contrast-110 hover:brightness-125 transition-all duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayerSection;
