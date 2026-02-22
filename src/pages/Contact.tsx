import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "27646877648";

const Contact = () => (
  <div className="min-h-screen bg-background relative z-10 pt-20">
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-center text-foreground mb-2">Get In Touch</h1>
        <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-16">
          We'd love to hear from you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-10 shadow-luxury text-center"
          >
            <MessageCircle size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-display text-2xl text-foreground mb-2">Professional Enquiries</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Wholesale, collaborations, or bulk orders — chat directly with Nondumiso.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent("Hi Nondumiso! I have a professional enquiry about Savor & Ore.");
                window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
              }}
              className="btn-rose-gold px-8 py-3 rounded-sm font-body text-xs tracking-widest uppercase"
            >
              Chat on WhatsApp
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg p-10 shadow-luxury text-center"
          >
            <Mail size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-display text-2xl text-foreground mb-2">Email Us</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              For formal correspondence and documentation.
            </p>
            <a
              href="mailto:Savor.orecookies@gmail.com"
              className="btn-outline-dark px-8 py-3 rounded-sm font-body text-xs tracking-widest uppercase inline-block"
            >
              Savor.orecookies@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-card rounded-lg p-10 shadow-luxury text-center"
        >
          <h3 className="font-display text-2xl text-foreground mb-4">Operating Hours</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Customer Service & Orders</strong><br />
            Tuesday – Thursday, 08:00 – 20:00
          </p>
          <p className="font-body text-xs text-muted-foreground mt-4">
            Collection & Dispatch: Monday & Friday only
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
