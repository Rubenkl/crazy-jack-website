import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";

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

  // Confetti on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 450,
        spread: 300,
        origin: { x: 0, y: 0.5 },
        angle: 45,
        startVelocity: 80,
        gravity: 0.8,
        colors: ["#ff2d7a", "#9b87f5", "#ffffff", "#1a1f2e"],
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/image-5.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </motion.div>

      {/* Centered Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 py-20">
        <div className="flex flex-col items-center text-center w-full max-w-7xl mx-auto">
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
            className="mb-12 md:mb-16 lg:mb-20 relative w-full"
          >
            <img
              src="/images/logo-crazy-jack.png"
              alt="Crazy Jack Logo"
              className="h-32 md:h-48 lg:h-64 xl:h-72 w-auto mx-auto"
            />
          </motion.div>

          {/* Artist Cutout with Overlaid Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl lg:max-w-4xl mx-auto -mt-8 md:-mt-12 lg:-mt-16"
          >
            <img src="/images/cutout-artist.png" alt="Crazy Jack DJ" className="w-full h-auto object-contain" />

            {/* Action Buttons Overlaid on Bottom of Cutout */}
            <div className="absolute bottom-4 md:bottom-20 lg:bottom-24 left-0 right-0 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-row gap-3 sm:gap-4 items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("booking")}
                  className="px-6 md:px-10 py-2.5 md:py-4 bg-primary text-primary-foreground font-bold text-sm md:text-lg uppercase tracking-wider relative overflow-hidden group w-36 md:w-52"
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
                  className="px-6 md:px-10 py-2.5 md:py-4 bg-primary text-primary-foreground font-bold text-sm md:text-lg uppercase tracking-wider relative overflow-hidden group w-36 md:w-52"
                  style={{
                    clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                  }}
                >
                  <span className="relative z-10">{t.cta.listen}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
