import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/science", label: "The Science" },
  { to: "/glow-challenge", label: "Glow Challenge" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/health-guide", label: "Health Support Guide" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Savor & Ore" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-xs tracking-widest uppercase transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground hover:text-accent transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-background text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-body font-semibold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(true)} className="relative text-foreground">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-background text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-body font-semibold">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2 font-body text-sm tracking-widest uppercase ${
                location.pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
