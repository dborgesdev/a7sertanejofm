import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import aboutImg from "@/assets/about-studio.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-stage-light-bottom overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-ember">
              <img
                src={aboutImg}
                alt="Estúdio A7 Sertanejo"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-6 leading-tight">
              Muito mais que música.{" "}
              <span className="gradient-text">É companhia.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Da viola caipira ao sertanejo universitário, a A7 Sertanejo acompanha
              seu trabalho, seu churrasco e seu descanso. Uma seleção impecável em
              alta definição para quem vive a paixão sertaneja.
            </p>
            <motion.a
              href="#player"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 78, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-display font-bold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Volume2 size={18} strokeWidth={1.5} />
              Aumente o Som
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
