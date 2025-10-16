import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            {t.about.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
              />
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {t.about.body}
              </p>
              
              <motion.a
                href="https://www.dropbox.com/scl/fo/kopcji3o3oggwirxe0soz/AGqs3eR9pBrG11pJfM8d4Hg?rlkey=8ls45lltof7ya4vn0kl8ntg0b&e=1&st=xvbyjxbc&dl=1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold text-base uppercase tracking-wider relative overflow-hidden group"
                style={{ 
                  clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">Download Presskit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
