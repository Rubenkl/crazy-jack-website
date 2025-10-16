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
    <section ref={ref} className="relative min-h-screen flex items-start pt-32 md:pt-40 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
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
                className="mb-6"
              >
                <img 
                  src="/images/logo-crazy-jack.png" 
                  alt="Crazy Jack Logo" 
                  className="h-32 md:h-48 lg:h-64 w-auto"
                />
              </motion.div>
              
              {/* Fxck Genres Badge - Diagonal Bottom Right */}
              <span
                className="absolute -bottom-2 right-0 md:-bottom-3 md:right-4 lg:right-8"
                style={{ 
                  transform: "rotate(-18deg)",
                }}
              >
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient whitespace-nowrap animate-pulse-scale inline-block uppercase">
                  {t.hero.tag}
                </span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            >
              {t.hero.pitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("booking")}
                className="px-8 py-3 bg-primary text-primary-foreground font-bold text-base uppercase tracking-wider relative overflow-hidden group"
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
                className="px-8 py-3 bg-primary text-primary-foreground font-bold text-base uppercase tracking-wider relative overflow-hidden group"
                style={{ 
                  clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >
                <span className="relative z-10">{t.cta.listen}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - DJ Image Cutout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl" />
              <img 
                src="/images/cutout-artist.png" 
                alt="Crazy Jack DJ" 
                className="relative z-10 h-full w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

