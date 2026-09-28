import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_LINKS } from '../data/content';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!CONTACT_LINKS.whatsapp) return null;

  const href = `https://wa.me/${CONTACT_LINKS.whatsapp.replace(
    /\D/g,
    ''
  )}?text=${encodeURIComponent(
    'Hi Md Ajhar Alam, I would like to discuss a project.'
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe57] lg:bottom-6 lg:right-6"
          aria-label="Chat on WhatsApp"
        >
          {/* Ping ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
            style={{ animationDuration: '2.5s' }}
          />

          {/* WhatsApp icon */}
          <span className="relative z-10">
            <MessageCircle className="h-6 w-6" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}