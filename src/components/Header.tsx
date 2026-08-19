import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ShopeeButton from './ShopeeButton';

const navLinks = [
  { label: '目的地', href: '#destinations' },
  { label: '特色', href: '#features' },
  { label: '常見問題', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-cyan-200 shadow-[0_8px_40px_-12px_rgba(6,182,212,0.2)]'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="block h-14 w-14 overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-lg shadow-cyan-bright/20"
          >
            <img
              src="https://esim-murex.vercel.app/photo_2026-08-06_21-44-40.jpg"
              alt="LEXGO"
              className="h-full w-full object-contain"
            />
          </motion.span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-sm font-bold text-navy-700 transition hover:bg-cyan-50 hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ShopeeButton size="sm" label="🛒 在蝦皮商城選購" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl bg-navy-100 text-navy-800 md:hidden"
          aria-label="開啟選單"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-cyan-100 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-navy-700 hover:bg-cyan-50 hover:text-navy-900"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <ShopeeButton size="md" label="🛒 在蝦皮商城選購" full />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
