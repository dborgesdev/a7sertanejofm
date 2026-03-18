import { motion } from "framer-motion";
import { Zap, Headphones, Music, MapPin } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Energia 24h", desc: "Sem pausas para o tédio." },
  { icon: Headphones, title: "Qualidade HD", desc: "Som cristalino em qualquer dispositivo." },
  { icon: Music, title: "Seleção Premium", desc: "As melhores faixas, sem repetição chata." },
  { icon: MapPin, title: "Feita pra Você", desc: "Companhia garantida no Brasil e no mundo." },
];

const BenefitsRow = () => {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-[hsl(25,100%,45%)]" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <b.icon size={36} className="mx-auto mb-4 text-primary-foreground" strokeWidth={1.5} />
              <h3 className="font-display font-black text-lg text-primary-foreground mb-1">{b.title}</h3>
              <p className="text-primary-foreground/70 text-sm font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsRow;
