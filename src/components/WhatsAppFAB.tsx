import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  return (
    <motion.a
      href="https://wa.me/5543998461977"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow"
      style={{ backgroundColor: "#25D366" }}
      title="Peça seu Modão!"
    >
      <MessageCircle size={24} className="text-foreground" fill="currentColor" strokeWidth={1.5} />
    </motion.a>
  );
};

export default WhatsAppFAB;
