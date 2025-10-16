import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31626874347', '_blank');
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            {t.cta.whatsapp}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
