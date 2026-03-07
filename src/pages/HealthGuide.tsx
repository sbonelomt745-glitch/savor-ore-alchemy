import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "@/assets/health-guide-bg.png";

const boxes = [
  {
    emoji: "🍫",
    title: "The GF Cocoa Box",
    tagline: "Best for people focused on heart health, digestion, and balanced energy.",
    benefits: [
      { name: "Heart Health Support", desc: "The natural compounds found in cocoa together with fibre-rich grains help support healthy circulation and cardiovascular wellness, making this a smarter snack for people mindful of their heart health." },
      { name: "Digestive Health", desc: "Whole grain fibre supports healthy gut function, helping improve digestion and promote better nutrient absorption." },
      { name: "Sustained Daily Energy", desc: "The combination of natural carbohydrates and fibre helps provide steady energy release, preventing the sharp energy crashes caused by refined sugary snacks." },
      { name: "Immune Support", desc: "Antioxidants found in cocoa help support the body's natural defence system, helping the body fight oxidative stress." },
    ],
  },
  {
    emoji: "🍫",
    title: "The Cocoa-Date Box",
    tagline: "Best for people needing natural energy, recovery, and nutrient density.",
    benefits: [
      { name: "Natural Energy Support", desc: "Dates provide quick yet balanced natural energy, making this a great option for people who need sustained fuel throughout the day." },
      { name: "Iron & Mineral Support", desc: "Nutrient-dense ingredients support healthy iron levels and mineral intake, which helps combat fatigue and low stamina." },
      { name: "Brain & Mood Support", desc: "Cocoa contains natural compounds linked to improved mood and mental wellbeing, helping you stay focused and positive." },
      { name: "Digestive Balance", desc: "Natural fibre supports healthy digestion and gut movement, helping the body process food more efficiently." },
    ],
  },
  {
    emoji: "🍫",
    title: "The OG Cocoa Box",
    tagline: "Best for people needing digestive comfort, circulation support, and immune balance.",
    benefits: [
      { name: "Digestive Comfort", desc: "Ginger is widely recognised for supporting healthy digestion and reducing stomach discomfort, making this snack easier on the gut." },
      { name: "Circulation Support", desc: "Cocoa flavonoids are associated with improved blood flow, which supports heart and circulatory health." },
      { name: "Natural Immune Support", desc: "Honey and plant compounds contain natural antibacterial and antioxidant properties that help support immune resilience." },
      { name: "Warm Metabolic Support", desc: "Ginger is known to support metabolism and internal warmth, helping the body function efficiently." },
    ],
  },
  {
    emoji: "🍋",
    title: "The Zesty Vanilla Box",
    tagline: "Best for people managing metabolic health and maintaining balanced energy.",
    benefits: [
      { name: "Blood Sugar Balance", desc: "Balanced ingredients help support steady glucose levels, reducing the spikes and crashes caused by refined snacks." },
      { name: "Gut Health Support", desc: "Fibre helps nourish beneficial gut bacteria, supporting healthy digestion and overall gut balance." },
      { name: "Cholesterol Management", desc: "Whole-food fibre can help support the body's ability to manage cholesterol levels naturally." },
      { name: "Anti-Inflammatory Support", desc: "Natural antioxidants support the body in reducing everyday inflammation linked to stress and fatigue." },
    ],
  },
  {
    emoji: "🤍",
    title: "The Vanilla-Almond Box",
    tagline: "Best for people focused on brain health, blood pressure, and long-term wellness.",
    benefits: [
      { name: "Blood Pressure Support", desc: "Almonds contain magnesium and heart-supportive nutrients that help promote healthy blood pressure levels." },
      { name: "Brain Function & Mental Clarity", desc: "Healthy fats and vitamin-rich ingredients support cognitive function, focus, and mental performance." },
      { name: "Bone Strength Support", desc: "Minerals found in almonds help support bone density and skeletal health, especially important for long-term wellness." },
      { name: "Skin & Cellular Health", desc: "Vitamin E and antioxidants help protect cells and support healthy skin regeneration and repair." },
    ],
  },
  {
    emoji: "🍪",
    title: "The Classic Vanilla Box",
    tagline: "Best for people focused on digestive health, natural energy, and overall wellness.",
    benefits: [
      { name: "Digestive Health Support", desc: "Whole-grain fibre helps promote healthy digestion and gut balance, supporting smoother digestion and better nutrient absorption." },
      { name: "Natural Energy & Stamina", desc: "Naturally occurring carbohydrates help provide steady energy, helping you stay productive without the sudden crashes caused by highly processed snacks." },
      { name: "Iron & Blood Health Support", desc: "Naturally occurring minerals support healthy blood circulation and oxygen flow, which helps reduce feelings of fatigue and supports overall vitality." },
      { name: "Antioxidant Support", desc: "Plant-based compounds help protect the body from oxidative stress, supporting long-term cellular health and wellbeing." },
    ],
  },
];

const HealthGuide = () => (
  <div className="min-h-screen relative">
    {/* Fixed background */}
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-foreground/80" />
    </div>

    {/* Content */}
    <div className="relative z-10 pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl text-accent mb-4">
            🍪 Savor & Ore Health Support Guide
          </h1>
          <p className="font-body text-sm md:text-base text-[hsl(35,30%,85%)] tracking-widest uppercase max-w-2xl mx-auto">
            Every box is crafted to nourish a different part of your wellness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxes.map((box, i) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl p-6 md:p-8"
              style={{
                background: "hsla(0, 0%, 8%, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid hsla(15, 60%, 65%, 0.15)",
              }}
            >
              <span className="text-3xl">{box.emoji}</span>
              <h2 className="font-display text-2xl md:text-3xl text-accent mt-2 mb-1">
                {box.title}
              </h2>
              <p className="font-body text-xs text-[hsl(35,30%,75%)] tracking-wide italic mb-6">
                {box.tagline}
              </p>

              <div className="space-y-5">
                {box.benefits.map((b, j) => (
                  <div key={j}>
                    <h3 className="font-display text-lg text-accent mb-1">
                      {j + 1}. {b.name}
                    </h3>
                    <p className="font-body text-sm text-[hsl(35,30%,85%)] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 mb-8 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-accent mb-4">
            Choose Your Path
          </h2>
          <p className="font-body text-sm text-[hsl(35,30%,75%)] tracking-widest uppercase mb-12 max-w-xl mx-auto">
            Every journey starts with a single bite
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <Link
              to="/shop"
              className="btn-rose-gold font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-md w-64 text-center"
            >
              Shop Your Support Box
            </Link>

            <Link
              to="/about"
              className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-md w-64 text-center border border-accent text-accent bg-transparent transition-all duration-300 hover:bg-accent hover:text-foreground"
            >
              Begin Your Ritual
            </Link>

            <Link
              to="/glow-challenge"
              className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-md w-64 text-center relative overflow-hidden bg-gradient-to-r from-accent via-[hsl(35,50%,55%)] to-accent text-foreground transition-all duration-300 hover:shadow-[0_0_24px_4px_hsl(15,60%,65%,0.4)] hover:-translate-y-0.5"
            >
              Secure Your Glow
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default HealthGuide;
