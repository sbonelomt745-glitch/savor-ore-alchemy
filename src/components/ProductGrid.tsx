import { motion } from "framer-motion";
import cocoaCookies from "@/assets/cocoa-cookies.jpg";

const WHATSAPP = "27768052563";

interface Product {
  name: string;
  price: number;
  ingredients: string;
  bestSeller?: boolean;
  special?: string;
}

const products: Product[] = [
  { name: "The OG Cocoa Box", price: 207, ingredients: "Cocoa, Ginger, Honey, Oats" },
  { name: "The GF Cocoa Box", price: 231, ingredients: "Cocoa, Gluten-Free Oats, Raisins, Honey", special: "Gluten Free" },
  { name: "The Cocoa-Date Box", price: 231, ingredients: "Almond Flour, Cocoa, Dates, Raisins" },
  { name: "The Vanilla-Almond Box", price: 231, ingredients: "Almond & Coconut Flour, Honey, Pure Vanilla" },
  { name: "The Zesty Vanilla Box", price: 243, ingredients: "Wheat, Greek Yogurt, Lemon, Honey, Pure Vanilla" },
  { name: "The Classic Vanilla Box", price: 207, ingredients: "Oat Flour, Honey, Raisins, Pure Vanilla" },
  { name: "The Collector's Mix", price: 225, ingredients: "2 of each variation — the ultimate tasting experience", bestSeller: true },
];

const sendWhatsApp = (boxName: string) => {
  const msg = encodeURIComponent(`Hi Savor & Ore! I'd like to order: ${boxName}`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
};

const ProductGrid = () => (
  <section id="shop" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-2">The Collection</h2>
      <p className="divider-ornament text-center font-body text-sm text-muted-foreground tracking-widest uppercase mb-16">
        12 handcrafted cookies per box
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative bg-card rounded-lg overflow-hidden shadow-luxury group ${p.bestSeller ? "sm:col-span-2 lg:col-span-1 ring-2 ring-accent" : ""}`}
          >
            {p.bestSeller && (
              <span className="absolute top-4 right-4 z-10 btn-rose-gold px-3 py-1 rounded-sm text-xs font-body tracking-widest uppercase">
                Best Seller
              </span>
            )}
            {p.special && (
              <span className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-sm text-xs font-body tracking-widest uppercase">
                {p.special}
              </span>
            )}

            <div className="h-48 overflow-hidden">
              <img src={cocoaCookies} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.name}</h3>
              <p className="font-body text-xs text-muted-foreground tracking-wide mb-4">{p.ingredients}</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-foreground">R{p.price}</span>
                <button
                  onClick={() => sendWhatsApp(p.name)}
                  className="btn-rose-gold px-6 py-2.5 rounded-sm font-body text-xs tracking-widest uppercase"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
