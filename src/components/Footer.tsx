import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/30">
      <div className="container flex flex-col items-center gap-6 text-center">
        <img alt="A7 Sertanejo" className="h-16" src="/logo-a7sertanejo-hf.png" />
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/radioa7sertanejofmoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
            
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/5543998461977"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-[#25D366] hover:border-[#25D366] transition-colors">
            
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-muted-foreground text-xs font-body">
          © 2026 Rádio A7 Sertanejo. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-xs font-body">
          Desenvolvido por{" "}
          <a
            href="https://smartlocal.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary transition-colors">
            
            Douglas Borges - Smart Local
          </a>
        </p>
      </div>
    </footer>);

};

export default Footer;
