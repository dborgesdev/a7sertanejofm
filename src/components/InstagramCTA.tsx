import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-stage-light">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Instagram size={40} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-4">
            Viva os bastidores
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 font-body">
            Faça parte da maior comunidade sertaneja do país. Acompanhe os momentos que marcam a nossa história e fique por dentro de tudo o que acontece na rádio que é a cara do Brasil.
          </p>
          <motion.a
            href="https://www.instagram.com/radioa7sertanejofmoficial"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-sm text-foreground"
            style={{
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <Instagram size={18} />
            Seguir @radioa7sertanejofmoficial
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramCTA;
