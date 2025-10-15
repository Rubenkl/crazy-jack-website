import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";

export function Highlights() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const genres = ["Urban", "Latin", "House", "Hard Dance", "Mashups", "Edits", "Peak Hour"];

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          {t.highlights.title}
        </motion.h2>

        {/* Genre Marquee */}
        <div className="relative mb-16 overflow-hidden py-4">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...genres, ...genres].map((genre, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-bold text-muted-foreground/20 uppercase"
              >
                {genre} •
              </span>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.highlights.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <p className="text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
