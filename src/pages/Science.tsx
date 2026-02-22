import { motion } from "framer-motion";

const profiles = [
  {
    title: "The Professional",
    box: "OG Cocoa",
    icon: "⚡",
    focus: "Mental Clarity & Focus",
    description: "Whole Grain Oats and Raw Honey provide sustained, slow-release energy. No midday sugar crash—just pure fuel for high-focus projects and long meetings.",
    minerals: ["Iron from Cocoa", "B-Vitamins from Oats", "Natural Glucose from Honey"],
  },
  {
    title: "The Athlete",
    box: "Vanilla-Almond",
    icon: "💪",
    focus: "Keto-Friendly Recovery",
    description: "High in protein and healthy fats from Almond Flour and Coconut. These cookies help with muscle satiety and provide natural antioxidants for post-workout recovery.",
    minerals: ["Magnesium from Almonds", "MCTs from Coconut", "Calcium from Almond Flour"],
  },
  {
    title: "The Parent",
    box: "Classic Vanilla",
    icon: "🌿",
    focus: "Clean, Heart-Healthy Family Snacking",
    description: "A clean-label snack for the whole family. With 0% refined sugar and no artificial preservatives, high fiber supports happy tummies for every member.",
    minerals: ["Fiber from Oats", "Potassium from Raisins", "Natural Sweetness from Honey"],
  },
  {
    title: "The Sensitive Soul",
    box: "GF Cocoa",
    icon: "🦋",
    focus: "Gluten-Free Digestive Comfort",
    description: "Crafted with Gluten-Free Oats and gentle Raisins for those with sensitivities. All the indulgence of cocoa without the discomfort.",
    minerals: ["Soluble Fiber", "Iron from Cocoa", "Natural Sugars from Raisins"],
  },
  {
    title: "The High-Energy",
    box: "Cocoa-Date",
    icon: "🔥",
    focus: "Long-Lasting Satiety",
    description: "Dates and Almond Flour create a dense, satisfying cookie that keeps you going. Perfect for long days and outdoor adventures.",
    minerals: ["Potassium from Dates", "Healthy Fats from Almonds", "Antioxidants from Cocoa"],
  },
  {
    title: "The Vitality Seeker",
    box: "Zesty Vanilla",
    icon: "🍋",
    focus: "Immune-Boosting Vitamin C",
    description: "Greek Yogurt probiotics paired with bright Lemon zest for a cookie that strengthens your immune system and lifts your mood.",
    minerals: ["Vitamin C from Lemon", "Probiotics from Yogurt", "Vanilla Antioxidants"],
  },
];

const Science = () => (
  <div className="min-h-screen bg-background relative z-10 pt-20">
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-center text-foreground mb-2">The Science</h1>
        <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-4">
          Personalized Wellness
        </p>
        <p className="text-center font-body text-base text-muted-foreground max-w-2xl mx-auto mb-16">
          Every cookie in our collection is formulated for a specific lifestyle. Find your profile below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-lg p-8 shadow-luxury"
            >
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">{p.focus}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="border-t border-border pt-4 space-y-1">
                <span className="font-body text-xs text-muted-foreground tracking-wide">Key Minerals:</span>
                {p.minerals.map((m) => (
                  <p key={m} className="font-body text-xs text-foreground">• {m}</p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground tracking-wide">Recommended Box:</span>
                <p className="font-display text-lg font-semibold text-accent">{p.box}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Science;
