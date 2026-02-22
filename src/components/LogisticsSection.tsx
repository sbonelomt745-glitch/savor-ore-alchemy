import { motion } from "framer-motion";

const WHATSAPP = "27646877648";

const LogisticsSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-2">How It Works</h2>
      <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-16">
        Order · Pay · Enjoy
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-8 text-center shadow-luxury">
          <span className="text-2xl mb-3 block">🕐</span>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">Operating Hours</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Customer Service & Orders<br />
            <strong className="text-foreground">Tuesday – Thursday</strong><br />
            08:00 – 20:00
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-lg p-8 text-center shadow-luxury">
          <span className="text-2xl mb-3 block">📦</span>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">Delivery</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Musgrave Collection</strong><br />
            & South Africa-wide<br />
            <strong className="text-foreground">Pudo Delivery</strong>
          </p>
          <p className="font-body text-xs text-muted-foreground mt-3">
            Collection/Dispatch: Monday & Friday only
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg p-8 text-center shadow-luxury">
          <span className="text-2xl mb-3 block">💳</span>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">Payment</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Instant EFT<br />
            Capitec Pay<br />
            Yoco
          </p>
        </motion.div>
      </div>

      <div className="text-center">
        <button
          onClick={() => {
            const msg = encodeURIComponent("Hi Savor & Ore! I'd like to place an order.");
            window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="btn-rose-gold px-12 py-4 rounded-sm font-body text-sm tracking-widest uppercase"
        >
          Order via WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default LogisticsSection;
