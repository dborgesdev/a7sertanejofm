import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.jpg";

const AndroidIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m11.4045-6.0206l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C14.004 8.3516 13.04 8.0874 12 8.0874s-2.004.2642-3.1368.8617L6.8409 5.4461a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C5.0453 10.7417 3.064 13.844 3.064 17.433h17.872c0-3.589-1.9813-6.6913-5.0515-8.1122z" />
  </svg>
);

const AppleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05 1.72-3.44 1.72-1.31 0-1.84-.79-3.41-.79-1.61 0-2.13.75-3.41.79-1.39.04-2.52-.85-3.53-1.88-2.06-2.1-3.64-5.93-1.57-9.53 1.03-1.78 2.85-2.91 4.84-2.94 1.51-.02 2.94 1.02 3.86 1.02.91 0 2.65-1.25 4.47-1.07 1.81.08 3.2.74 4.14 2.11-3.71 2.23-3.11 7.04.04 8.31-.7 1.78-1.63 3.45-2.49 4.26zM12.03 7.25c-.02-2.13 1.76-3.95 3.84-4.14.21 2.47-2.13 4.47-3.84 4.14z" />
  </svg>
);

const WindowsIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1V11.4H0V3.449zm0 8.851h9.75v9.3L0 20.251V12.3zm10.55-10.35L24 0v11.4h-13.45V1.95zM10.55 12.3H24v11.7l-13.45-1.95V12.3z" />
  </svg>
);

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
                { label: "Android", icon: AndroidIcon },
                { label: "iOS", icon: AppleIcon },
                { label: "Windows", icon: WindowsIcon },
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
            {/* iPhone-style frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              {/* iPhone bezel */}
              <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[6px] shadow-ember border border-foreground/10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-2xl z-10 flex items-center justify-center">
                  <div className="w-16 h-4 bg-[#0a0a0a] rounded-full" />
                </div>
                {/* Screen */}
                <div className="relative rounded-[2.6rem] overflow-hidden bg-background">
                  <img
                    src="/tela-app-a7 sertanejo.jpg"
                    alt="App A7 Sertanejo"
                    className="w-60 md:w-68 aspect-[9/19.5] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Bottom bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-foreground/30 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
