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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight relative"
              >
                CRAZY JACK
              </motion.h1>
              
              {/* Fxck Genres Badge - Diagonal */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: -18 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-8 md:-right-12 lg:-right-16 text-xl md:text-2xl lg:text-3xl font-bold text-gradient whitespace-nowrap"
              >
                {t.hero.tag}
              </motion.span>
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("booking")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-base font-bold shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all"
              >
                {t.cta.book}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("music")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-base font-bold shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all"
              >
                {t.cta.listen}
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
            {/* Placeholder for DJ Cutout PNG */}
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="relative text-center text-muted-foreground/50 border-4 border-dashed border-muted-foreground/20 rounded-2xl p-12 backdrop-blur-sm">
                <p className="text-lg font-medium">DJ Cutout Image</p>
                <p className="text-sm mt-2">Add your PNG here</p>
                <p className="text-xs mt-4 max-w-xs">Transparent PNG recommended<br/>600x800px minimum</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

