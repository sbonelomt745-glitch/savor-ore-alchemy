import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import cocoaCookies from "@/assets/cocoa-cookies.jpg";

const HeroSection = () => {
  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, hsl(15 60% 65%), transparent 60%), radial-gradient(circle at 70% 30%, hsl(35 50% 55%), transparent 50%)`
      }} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <img src={logo} alt="Savor & Ore" className="w-64 md:w-80 mb-8" />

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-foreground mb-4">
          Baked with Purpose.
        </h1>
        <h2 className="font-display text-2xl md:text-3xl italic text-muted-foreground font-light mb-6">
          Sweetened by Nature.
        </h2>

        <p className="font-body text-sm md:text-base text-muted-foreground max-w-lg mb-10 tracking-wide leading-relaxed">
          Handcrafted functional cookies with zero refined sugar, packed with minerals and adaptogens. 
          Every box is a commitment to flavor and wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button onClick={() => window.location.href = '/shop'} className="btn-rose-gold px-10 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase">
            Shop Now
          </button>
          <button
            onClick={() => window.location.href = '/about'}
            className="btn-outline-dark px-10 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase"
          >
            Our Story
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 w-full max-w-3xl mx-auto"
      >
        <div className="rounded-2xl overflow-hidden shadow-luxury">
          <img
            src={cocoaCookies}
            alt="Savor & Ore handcrafted dark cocoa cookies with raw honeycomb"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
