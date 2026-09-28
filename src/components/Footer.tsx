import { ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_LINKS, PROFILE } from '../data/content';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const whatsappHref = CONTACT_LINKS.whatsapp
    ? `https://wa.me/${CONTACT_LINKS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Md Ajhar Alam, I would like to discuss a project.')}`
    : '#contact';

  return (
    <footer className="relative bg-ink-950 border-t border-ink-800 overflow-hidden pb-24 lg:pb-14">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-lime-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <img src={PROFILE.photo} alt="Md Ajhar Alam" className="w-9 h-9 rounded-lg object-cover border border-lime-400/40" />
              <div>
                <h3 className="font-semibold text-base tracking-tight text-ink-50">{PROFILE.name}</h3>
                <p className="text-[10px] text-ink-500 font-medium tracking-wider uppercase">
                  {PROFILE.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-ink-400 italic font-serif">
              "Building useful things with code."
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-ink-300 border border-ink-800 hover:border-lime-400/30 hover:text-lime-400 hover:bg-ink-900/60 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-800/60 text-center">
          <p className="text-xs text-ink-600">
            © 2026 {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Mobile fixed Hire Me bar */}
      <a
        href={whatsappHref}
        target={CONTACT_LINKS.whatsapp ? '_blank' : undefined}
        rel={CONTACT_LINKS.whatsapp ? 'noopener noreferrer' : undefined}
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center justify-center gap-2 py-4 bg-lime-400 text-ink-950 text-sm font-semibold shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      >
        <MessageCircle className="w-5 h-5" />
        Hire Me
      </a>
    </footer>
  );
}
