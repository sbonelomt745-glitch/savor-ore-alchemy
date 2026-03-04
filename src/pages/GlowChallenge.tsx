import { motion } from "framer-motion";

import cocoaCookies from "@/assets/cocoa-cookies.jpg";
import cocoaDate from "@/assets/cocoa-date.jpg";
import crimsonHeart from "@/assets/crimson-heart.jpg";
import emeraldGlow from "@/assets/emerald-glow.jpg";
import goldenRoot from "@/assets/golden-root.jpg";
import oceanPearl from "@/assets/ocean-pearl.jpg";
import vanillaAlmond from "@/assets/vanilla-almond.jpg";
import zestyVanilla from "@/assets/zesty-vanilla.jpg";

const galleryImages = [
  { src: cocoaCookies, alt: "Cocoa cookies shared by a community member" },
  { src: cocoaDate, alt: "Cocoa date cookies on display" },
  { src: crimsonHeart, alt: "Crimson heart cookies" },
  { src: emeraldGlow, alt: "Emerald glow cookies" },
  { src: goldenRoot, alt: "Golden root cookies" },
  { src: oceanPearl, alt: "Ocean pearl cookies" },
  { src: vanillaAlmond, alt: "Vanilla almond cookies" },
  { src: zestyVanilla, alt: "Zesty vanilla cookies" },
];

const GlowChallenge = () => (
  <div className="min-h-screen bg-background relative z-10 pt-20">
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2">Our Community</h1>
          <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            The Glow Gallery
          </p>
          <p className="font-body text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Real moments from our community. Tag @SavorAndOre and use #SavorAndOreGlow to be featured.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid overflow-hidden rounded-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default GlowChallenge;
