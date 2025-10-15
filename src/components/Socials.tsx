import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Music2 } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/crazyjacknl/",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/crazyjacknl",
    icon: Music2,
    color: "hover:text-[#FF5500]",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
    icon: Music2,
    color: "hover:text-[#1DB954]",
  },
];

export function Socials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold mb-8">Follow the Energy</h3>
          <div className="flex gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center transition-all ${social.color} hover:border-current`}
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
