import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 py-12 px-4 bg-primary text-primary-foreground">
    <div className="max-w-5xl mx-auto text-center">
      <img src={logo} alt="Savor & Ore" className="w-32 mx-auto mb-6 opacity-90" />
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {[
          { to: "/", label: "Home" },
          { to: "/shop", label: "Shop" },
          { to: "/science", label: "The Science" },
          { to: "/glow-challenge", label: "Glow Challenge" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
          { to: "/health-guide", label: "Health Support Guide" },
        ].map((l) => (
          <Link key={l.to} to={l.to} className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
      <p className="font-body text-xs text-primary-foreground/50 mb-2">Savor.orecookies@gmail.com</p>
      <p className="font-body text-xs text-primary-foreground/60 max-w-lg mx-auto leading-relaxed mb-6">
        Our mineral-infused treats are designed for wellness; consult a professional for medical advice. 
        All cookies are handcrafted in Durban, South Africa.
      </p>
      <p className="font-body text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Savor & Ore. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
