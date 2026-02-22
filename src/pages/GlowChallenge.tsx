import { motion } from "framer-motion";

const WHATSAPP = "27646877648";

const rules = [
  "Purchase any Savor & Ore box",
  "Take a creative photo with your cookies",
  "Post on Instagram/TikTok and tag @SavorAndOre",
  "Use the hashtag #SavorAndOreGlow",
  "Winners selected monthly by the Savor & Ore team",
];

const GlowChallenge = () => (
  <div className="min-h-screen bg-background relative z-10 pt-20">
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2">The Glow Challenge</h1>
          <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Win Big
          </p>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Show us your glow. Snap a photo, share the vibe, and you could walk away with cold, hard cash.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-10 shadow-luxury"
          >
            <span className="text-5xl mb-4 block">🥈</span>
            <h3 className="font-display text-3xl font-semibold text-foreground mb-2">R10,000</h3>
            <p className="font-body text-sm text-muted-foreground">Runner-Up Prize</p>
            <p className="font-body text-xs text-muted-foreground mt-2">Best creative entry each month</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg p-10 shadow-luxury ring-2 ring-accent"
          >
            <span className="text-5xl mb-4 block">🏆</span>
            <h3 className="font-display text-3xl font-semibold text-accent mb-2">R20,000</h3>
            <p className="font-body text-sm text-muted-foreground">Grand Prize</p>
            <p className="font-body text-xs text-muted-foreground mt-2">Most viral photo of the month</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-10 shadow-luxury text-left max-w-2xl mx-auto mb-12"
        >
          <h3 className="font-display text-2xl text-foreground mb-6 text-center">How to Enter</h3>
          <ol className="space-y-4">
            {rules.map((r, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-display text-sm font-semibold">
                  {i + 1}
                </span>
                <span className="font-body text-sm text-muted-foreground pt-1">{r}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <button
          onClick={() => {
            const msg = encodeURIComponent("Hi Savor & Ore! I want to enter the Glow Challenge! 🌟");
            window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="btn-rose-gold px-12 py-4 rounded-sm font-body text-sm tracking-widest uppercase"
        >
          Enter the Challenge
        </button>
      </div>
    </section>
  </div>
);

export default GlowChallenge;
