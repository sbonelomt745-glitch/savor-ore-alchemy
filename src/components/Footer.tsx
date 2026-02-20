import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-12 px-4 bg-primary text-primary-foreground">
    <div className="max-w-5xl mx-auto text-center">
      <img src={logo} alt="Savor & Ore" className="w-32 mx-auto mb-6 brightness-0 invert opacity-80" />
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
