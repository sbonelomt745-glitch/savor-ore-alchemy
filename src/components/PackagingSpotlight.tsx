import { motion } from "framer-motion";

const PackagingSpotlight = () => (
  <section className="py-16 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center bg-card rounded-lg p-10 shadow-luxury"
    >
      <span className="text-3xl mb-4 block">🎁</span>
      <h3 className="font-display text-2xl text-foreground mb-4">Signature Sustainable Gift Box</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Every Savor & Ore order is hand-packed in our signature sustainable gift box—perfect for gifting or mindful indulgence.
      </p>
    </motion.div>
  </section>
);

export default PackagingSpotlight;
