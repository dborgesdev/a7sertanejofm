import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import cardRaizes from "@/assets/card-raizes.jpg";
import cardModao from "@/assets/card-modao.jpg";
import cardUniversitario from "@/assets/card-universitario.jpg";
import cardPatroas from "@/assets/card-patroas.jpg";
import cardChurrasco from "@/assets/card-churrasco.jpg";
import cardTop10 from "@/assets/card-top10.jpg";

const cards = [
  { title: "Raízes & Viola", desc: "A origem do sentimento caipira.", image: cardRaizes, popup: "Descubra como os acordes da viola caipira moldaram a história da música brasileira e continuam emocionando gerações na A7." },
  { title: "Modão Clássico", desc: "Aquelas que doem no peito.", image: cardModao, popup: "As vozes imortais de Milionário & José Rico, Tião Carreiro e muito mais. O verdadeiro modão raiz toca aqui." },
  { title: "Universitário", desc: "O agito que domina o Brasil.", image: cardUniversitario, popup: "A energia das arenas, os hits do momento e as parcerias que estouram nos paredões de som de todo o país." },
  { title: "As Patroas", desc: "A força feminina no sertanejo.", image: cardPatroas, popup: "Marília, Maiara, Maraisa e a nova geração de mulheres que revolucionaram as letras e a atitude da música sertaneja." },
  { title: "Play pro Churrasco", desc: "A trilha do seu fim de semana.", image: cardChurrasco, popup: "Fogo na carne e som na caixa. A programação perfeita para reunir os amigos e a família sem precisar pular de faixa." },
  { title: "Top 10 A7", desc: "As mais pedidas da semana.", image: cardTop10, popup: "Atualização semanal com as músicas que os ouvintes de Apucarana e região não param de pedir no nosso WhatsApp." },
];

const CultureCards = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="culture" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-4">
            O som da arena.{" "}
            <span className="gradient-text">A voz da sua terra.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Explore o universo sertanejo como nunca antes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-72 glow-hover"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-black text-xl mb-1">{card.title}</h3>
                <p className="text-foreground/60 text-sm font-body">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-3xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-foreground/50 hover:text-foreground"
              >
                <X size={20} />
              </button>
              <img
                src={cards[active].image}
                alt={cards[active].title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="font-display font-black text-2xl mb-3 gradient-text">
                {cards[active].title}
              </h3>
              <p className="text-foreground/70 leading-relaxed font-body">
                {cards[active].popup}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CultureCards;
