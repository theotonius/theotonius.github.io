import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "8801614802711";
  const message = encodeURIComponent("Hello Darktheo! I'm interested in working with you.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
}
