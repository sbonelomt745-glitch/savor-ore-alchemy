import { motion } from "framer-motion";
import emeraldGlow from "@/assets/emerald-glow.jpg";
import oceanPearl from "@/assets/ocean-pearl.jpg";
import crimsonHeart from "@/assets/crimson-heart.jpg";
import goldenRoot from "@/assets/golden-root.jpg";

const items = [
  {
    name: "The Emerald Glow",
    image: emeraldGlow,
    description: "A vibrant surge of Vitamin C and iron, designed to brighten your day from the inside out.",
  },
  {
    name: "The Ocean Pearl",
    image: oceanPearl,
    description: "Harnessing 92 essential minerals from the deep to support your body's natural rhythm.",
  },
  {
    name: "The Crimson Heart",
    image: crimsonHeart,
    description: "A deep antioxidant infusion focused on heart health and pure, tart indulgence.",
  },
  {
    name: "The Golden Root",
    image: goldenRoot,
    description: "A grounded, earthy blend crafted to restore balance and calm the modern soul.",
  },
];

const DiscoveryCatalog = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-2">The Mineral Lab</h2>
      <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-4">
        Coming Soon
      </p>
      <p className="text-center font-body text-sm text-muted-foreground italic max-w-xl mx-auto mb-16">
        "We are scientists of flavor, and there is more magic coming soon."
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-lg overflow-hidden group"
          >
            <div className="h-64 relative">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover blur-[2px] group-hover:blur-[1px] transition-all duration-500" />
              <div className="absolute inset-0 frosted-overlay" />
              <div className="absolute top-4 right-4">
                <span className="bg-accent/90 text-warm-cream px-3 py-1 rounded-sm text-xs font-body tracking-widest uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DiscoveryCatalog;
