import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </motion.div>

      {/* Centered Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
            }}
            onAnimationComplete={() => {
              // Trigger shake every 5 seconds
              setInterval(() => {
                const element = document.getElementById("crazy-jack-title");
                if (element) {
                  element.classList.add("animate-shake");
                  setTimeout(() => {
                    element.classList.remove("animate-shake");
                  }, 500);
                }
              }, 5000);
            }}
            id="crazy-jack-title"
            className="mb-4 relative"
          >
            <img 
              src="/images/logo-crazy-jack.png" 
              alt="Crazy Jack Logo" 
              className="h-20 md:h-32 lg:h-40 w-auto mx-auto"
            />
            
            {/* Fxck Genres Badge */}
            <span
              className="absolute -bottom-4 left-1/2 md:-bottom-6"
              style={{ 
                transform: "translateX(-50%) rotate(-12deg)",
              }}
            >
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient whitespace-nowrap animate-pulse-scale inline-block uppercase">
                {t.hero.tag}
              </span>
            </span>
          </motion.div>

          {/* Pitch Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground mb-8 mt-12 max-w-3xl font-medium"
          >
            {t.hero.pitch}
          </motion.p>

          {/* Artist Cutout with Overlaid Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl lg:max-w-4xl"
          >
            <img 
              src="/images/cutout-artist.png" 
              alt="Crazy Jack DJ" 
              className="w-full h-auto object-contain"
            />
            
            {/* Action Buttons Overlaid on Bottom of Cutout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-2 md:bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 items-center justify-center px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("booking")}
                className="px-10 py-4 bg-primary text-primary-foreground font-bold text-lg uppercase tracking-wider relative overflow-hidden group w-48"
                style={{ 
                  clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">{t.cta.book}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("music")}
                className="px-10 py-4 bg-primary text-primary-foreground font-bold text-lg uppercase tracking-wider relative overflow-hidden group w-48"
                style={{ 
                  clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">{t.cta.listen}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

