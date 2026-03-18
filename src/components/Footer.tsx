import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-a7sertanejo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/30">
      <div className="container flex flex-col items-center gap-6 text-center">
        <img alt="A7 Sertanejo" className="h-14 opacity-60 grayscale" src="/lovable-uploads/7f897eb6-42d5-46c0-abb7-764cdaf32768.png" />
        <p className="text-muted-foreground font-display font-bold text-lg tracking-wide">
          Sempre com você!
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/radioa7sertanejofmoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors">
            
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/5543998461977"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/60 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors">
            
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body">
          © 2026 Rádio A7 Sertanejo. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground/40 text-xs font-body">
          Desenvolvido por{" "}
          <a
            href="https://smartlocal.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 hover:text-primary transition-colors">
            
            Douglas Borges - Smart Local
          </a>
        </p>
      </div>
    </footer>);

};

export default Footer;