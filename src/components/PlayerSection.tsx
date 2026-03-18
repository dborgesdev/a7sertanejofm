import { motion } from "framer-motion";
import { Radio } from "lucide-react";

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
            O Melhor do Sertanejo
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-card rounded-[32px] p-3 md:p-4 shadow-ember"
        >
          <div className="rounded-3xl overflow-hidden aspect-video md:aspect-[16/7]">
            <iframe
              src="https://player.hdradios.net/player-topo-html5/6918/000000"
              className="w-full h-full border-0"
              allow="autoplay"
              title="A7 Sertanejo Player"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlayerSection;
