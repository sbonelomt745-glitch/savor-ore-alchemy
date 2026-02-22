import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart, checkoutViaWhatsApp } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-[60]" onClick={() => setIsOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-2xl text-foreground">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="font-body text-sm text-muted-foreground text-center mt-12">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.name} className="flex gap-4 bg-card rounded-lg p-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <h4 className="font-display text-sm font-semibold text-foreground">{item.name}</h4>
                  <p className="font-body text-xs text-muted-foreground">R{item.price} each</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="text-muted-foreground hover:text-foreground"><Minus size={14} /></button>
                    <span className="font-body text-sm text-foreground w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
                    <button onClick={() => removeFromCart(item.name)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                  </div>
                </div>
                <span className="font-display text-sm text-foreground">R{item.price * item.quantity}</span>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between">
              <span className="font-display text-lg text-foreground">Total</span>
              <span className="font-display text-2xl text-foreground">R{totalPrice}</span>
            </div>
            <button
              onClick={() => {
                checkoutViaWhatsApp(items, totalPrice);
                clearCart();
                setIsOpen(false);
              }}
              className="w-full btn-rose-gold py-3 rounded-sm font-body text-sm tracking-widest uppercase"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
