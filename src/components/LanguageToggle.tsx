import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-1 rounded-full bg-card border border-border p-1"
    >
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("nl")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          language === "nl"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        NL
      </button>
    </motion.div>
  );
}
