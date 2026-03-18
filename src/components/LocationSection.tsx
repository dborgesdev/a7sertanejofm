import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import mapaImg from "@/assets/mapa-apucarana.jpg";

const LocationSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={mapaImg} alt="Mapa Apucarana" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin size={40} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-4">
            De Apucarana{" "}
            <span className="gradient-text">para o mundo.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Orgulho de transmitir a energia do Norte do Paraná para todos os cantos do Brasil.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
