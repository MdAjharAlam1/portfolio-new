import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_LINKS, NAV_LINKS, PROFILE } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappHref = CONTACT_LINKS.whatsapp
    ? `https://wa.me/${CONTACT_LINKS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Md Ajhar Alam, I would like to discuss a project.')}`
    : '#contact';

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-ink-800/60 shadow-2xl shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('#home')}>
              <div className="relative">
                <img src={PROFILE.photo} alt="Md Ajhar Alam" className="w-9 h-9 rounded-lg object-cover border border-lime-400/40 shadow-lg shadow-lime-400/20" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm lg:text-base tracking-tight text-ink-50">
                  {PROFILE.name}
                </span>
                <span className="text-[10px] lg:text-[11px] text-ink-400 font-medium tracking-wider uppercase">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-ink-900/50 border border-ink-800/80 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      active ? 'text-ink-950' : 'text-ink-300 hover:text-ink-50'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-lime-400 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: hire action + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                onClick={(event) => {
                  if (!CONTACT_LINKS.whatsapp) {
                    event.preventDefault();
                    handleNavClick('#contact');
                  }
                }}
                target={CONTACT_LINKS.whatsapp ? '_blank' : undefined}
                rel={CONTACT_LINKS.whatsapp ? 'noopener noreferrer' : undefined}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-ink-950 text-sm font-semibold hover:bg-lime-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Hire Me
              </a>

              <button
                className="lg:hidden p-2 rounded-lg text-ink-200 hover:bg-ink-800 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass border-b border-ink-800/60"
          >
            <div className="px-5 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-ink-200 hover:bg-ink-800 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
