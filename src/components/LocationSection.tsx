import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,78,0,0.12)_0%,hsl(20_14%_8%)_48%,hsl(20_12%_6%)_100%)]">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin size={40} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-4">
            Do Brasil{" "}
            <span className="gradient-text">para o mundo.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Orgulho de transmitir a energia do Brasil para todos os cantos do Planeta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
