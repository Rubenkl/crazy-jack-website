import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Music() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          {t.music.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">{t.music.spotify}</h3>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/5K4W6rqBFWDnAN6FQUkS6x?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* SoundCloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-secondary transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">{t.music.soundcloud}</h3>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
              <iframe
                width="100%"
                height="352"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/crazyjacknl&color=%23ff2d7a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
