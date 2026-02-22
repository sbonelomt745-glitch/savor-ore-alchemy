import { MessageCircle } from "lucide-react";

const WHATSAPP = "27646877648";

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Savor & Ore! I'd like to enquire about your cookies.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 btn-rose-gold w-14 h-14 rounded-full flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default FloatingWhatsApp;
