import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle } from "lucide-react";

type WhatsAppButtonVariant = "classic" | "neon" | "minimal" | "gradient" | "outlined";

interface WhatsAppButtonProps {
  variant?: WhatsAppButtonVariant;
}

export function WhatsAppButton({ variant = "classic" }: WhatsAppButtonProps) {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31626874347', '_blank');
  };

  const variants = {
    // Variant 1: Classic WhatsApp Green
    classic: "inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg rounded-full transition-all shadow-lg hover:shadow-xl",
    
    // Variant 2: Neon Pink Style (matching site theme)
    neon: "inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg transition-all shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)]",
    
    // Variant 3: Minimal Outline
    minimal: "inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-lg rounded-lg transition-all",
    
    // Variant 4: Gradient Style
    gradient: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105",
    
    // Variant 5: Soft Outlined with Icon Emphasis
    outlined: "inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-border hover:border-[#25D366] text-foreground hover:text-[#25D366] font-bold text-lg rounded-xl transition-all shadow-md hover:shadow-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "gradient" ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleWhatsAppClick}
      className={variants[variant]}
    >
      <MessageCircle className="w-6 h-6" />
      {t.cta.whatsapp}
    </motion.button>
  );
}
