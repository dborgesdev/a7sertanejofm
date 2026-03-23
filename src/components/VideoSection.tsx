import { motion } from "framer-motion";

const VideoSection = () => {
  // Parâmetros para um player minimalista e focado no conteúdo:
  const videoId = "LBkUiG-d46Y";
  const videoParams = "?modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0";
  const videoUrl = `https://www.youtube.com/embed/${videoId}${videoParams}`;

  return (
    <section className="relative py-20 bg-[#080808] overflow-hidden">
      
      {/* Glow de fundo (Vibe Arena/Show) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Título H2 com destaque em Laranja */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-black text-white mb-10 text-center uppercase italic tracking-tighter"
          >
            O Som da <span className="text-orange-500">Arena</span> na sua Tela
          </motion.h2>

          {/* Container do Vídeo com Borda "Glow" e Aspect Ratio */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-5xl p-1.5 rounded-2xl bg-gradient-to-b from-orange-500/20 to-transparent border border-white/5 shadow-2xl shadow-orange-900/10"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="Destaque A7 Sertanejo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Elemento Decorativo Inferior */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-orange-500/50" />
            <span className="text-zinc-500 font-sans text-xs font-bold tracking-[0.3em] uppercase">
              Sinta a emoção
            </span>
            <div className="h-[2px] w-8 bg-orange-500/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
