import { motion } from "framer-motion";
import LogisticsSection from "@/components/LogisticsSection";

const About = () => (
  <div className="min-h-screen bg-background relative z-10 pt-20">
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2">About Savor & Ore</h1>
          <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-12">
            From a Durban Kitchen
          </p>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            It started in a Durban kitchen with a simple question: <em className="text-foreground font-medium">Why can't our treats actually treat us well?</em> 🥣🇿🇦
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            I'm <strong className="text-foreground">Nondumiso</strong>, the founder of Savor & Ore. I spent months perfecting the blend of organic honey, cocoa, whole grain wheat and pure oats to create a cookie that tastes like an indulgence but works like a supplement.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Every batch is hand-crafted, keeping the <em className="text-foreground">"savor"</em> in concentrated flavours and the <em className="text-foreground">"Ore"</em> in our mineral-rich ingredients.
          </p>
        </motion.div>
      </div>
    </section>
    <LogisticsSection />
  </div>
);

export default About;
