import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useState } from "react";
import { X } from "lucide-react";

// Simple image URLs from Instagram posts (you can replace these with actual saved images)
const photos = [
  { 
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/471986668_18492527669008581_2826129384154064632_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=xyz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_xyz&oe=xyz",
    alt: "Crazy Jack performing live",
    instagramUrl: "https://www.instagram.com/p/DPEl-I4DBnZ/"
  },
  { 
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/470894371_18492005970008581_7168893287773196319_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=xyz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_xyz&oe=xyz",
    alt: "DJ Crazy Jack at the decks",
    instagramUrl: "https://www.instagram.com/p/DOv3rQuDLEa/"
  },
  { 
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/469932822_18491531551008581_4442660558663782058_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=xyz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_xyz&oe=xyz",
    alt: "Festival performance by Crazy Jack",
    instagramUrl: "https://www.instagram.com/p/DOoJGjfDDyN/"
  },
];

export function PhotoGallery() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          {t.photos.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.a
              key={i}
              href={photo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedPhoto(i);
              }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  // Fallback to placeholder if Instagram URL fails
                  e.currentTarget.src = `https://placehold.co/600x600/1a1a2e/e94560?text=View+on+Instagram`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="text-sm font-medium text-foreground">Click to view on Instagram</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-primary transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl w-full">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/800x800/1a1a2e/e94560?text=View+on+Instagram`;
              }}
            />
            <a
              href={photos[selectedPhoto].instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              View on Instagram
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
