import { motion } from "framer-motion";

const FounderStory = () => (
  <section id="story" className="py-24 px-4 bg-secondary">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Our Story</h2>
        <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-12">
          From a Durban kitchen
        </p>

        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          It started in a Durban kitchen with a simple question: <em className="text-foreground font-medium">Why can't our treats actually treat us well?</em> 🥣🇿🇦
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          I'm <strong className="text-foreground">Sbonelo</strong>, the founder of Savor & Ore. I spent months perfecting the ratio of wild-crafted Sea Moss and potent adaptogens to create a cookie that tastes like an indulgence but works like a supplement.
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          Every batch is hand-crafted, keeping the <em className="text-foreground">"savor"</em> in concentrated flavours and the <em className="text-foreground">"Ore"</em> in our mineral-rich ingredients.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FounderStory;
