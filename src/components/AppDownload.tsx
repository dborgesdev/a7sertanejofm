import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const AppDownload = () => {
  return (
    <section id="app" className="py-20 md:py-32 bg-gradient-to-b from-surface-elevated to-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-6 leading-tight">
              A7 Sertanejo{" "}
              <span className="gradient-text">no seu bolso.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body">
              Leve a melhor programação para o carro, academia ou trabalho.
              Baixe o aplicativo oficial, ouça ao vivo e interaja com a nossa equipe.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Android", icon: Smartphone },
                { label: "iOS", icon: Smartphone },
                { label: "Windows", icon: Monitor },
              ].map((p) => (
                <motion.a
                  key={p.label}
                  href="https://player.hdradios.net/player-app-multi-plataforma/6918"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 78, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card rounded-2xl px-6 py-3 flex items-center gap-3 hover:border-primary/40 transition-colors"
                >
                  <p.icon size={20} className="text-primary" strokeWidth={1.5} />
                  <div>
                    <span className="text-xs text-muted-foreground block font-body">Baixe para</span>
                    <span className="font-display font-bold text-sm">{p.label}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={appMockup}
                alt="App A7 Sertanejo"
                className="relative w-64 md:w-72 rounded-[2.5rem] shadow-ember border-2 border-foreground/10"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
