import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const WHATSAPP = "27646877648";

export const checkoutViaWhatsApp = (items: CartItem[], totalPrice: number) => {
  const summary = items
    .map((i) => `• ${i.name} x${i.quantity} — R${i.price * i.quantity}`)
    .join("\n");
  const msg = encodeURIComponent(
    `Hi Savor & Ore! 🍪 I'd like to order:\n\n${summary}\n\n*Total: R${totalPrice}*\n\nPlease send payment details.`
  );
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (name: string) =>
    setItems((prev) => prev.filter((i) => i.name !== name));

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(name);
    setItems((prev) =>
      prev.map((i) => (i.name === name ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
