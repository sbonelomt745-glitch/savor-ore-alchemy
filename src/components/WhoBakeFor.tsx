import { motion } from "framer-motion";

const personas = [
  {
    title: "The Busy Professional",
    subtitle: "The Energy Box",
    benefits: "Whole Grain Oats and Raw Honey provide sustained, slow-release energy—no midday sugar crash, just pure fuel.",
    pick: "The OG Cocoa",
    icon: "⚡",
  },
  {
    title: "The Fitness Enthusiast",
    subtitle: "The Recovery Box",
    benefits: "High in protein and healthy fats from Almond Flour and Greek Yogurt. Natural antioxidants for post-workout recovery.",
    pick: "The Vanilla-Almond",
    icon: "💪",
  },
  {
    title: "The Conscious Parent",
    subtitle: "The Wholesome Box",
    benefits: "Clean-label, 0% refined sugar, no artificial preservatives. High fiber supports happy tummies for the whole family.",
    pick: "The Classic Vanilla",
    icon: "🌿",
  },
  {
    title: "The Wellness Seeker",
    subtitle: "The Mood Box",
    benefits: "Pure Cocoa is a natural mood-booster rich in flavonoids. Combined with Ginger or Vanilla for a moment of zen.",
    pick: "The Cocoa-Date Box",
    icon: "✨",
  },
];

const WhoBakeFor = () => (
  <section className="py-24 px-4 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-2">Who We Bake For</h2>
      <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-16">
        Every box, a purpose
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-lg p-6 shadow-luxury text-center"
          >
            <span className="text-4xl mb-4 block">{p.icon}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="font-body text-xs text-accent tracking-widest uppercase mb-4">{p.subtitle}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.benefits}</p>
            <div className="border-t border-border pt-4">
              <span className="font-body text-xs text-muted-foreground tracking-wide">Best Pick:</span>
              <p className="font-display text-base font-semibold text-foreground">{p.pick}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoBakeFor;
