import { motion } from 'framer-motion';
import { MapPin, Zap, Globe2, Signal, Sparkles, CheckCircle2 } from 'lucide-react';
import ShopeeButton from './ShopeeButton';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-300 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-bright"
          >
            <Sparkles className="h-3.5 w-3.5" /> 你最強的旅遊上網夥伴
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl"
          >
            跟著 <span className="bg-gradient-to-r from-cyan-bright to-navy-500 bg-clip-text text-transparent">LEXGO</span><br className="hidden sm:block" />
            暢遊全世界<span className="inline-block animate-wiggle">！</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-navy-700 sm:text-lg"
          >
            即時 QR Code 交付、零漫遊費、真正高速上網。你終極的旅遊上網神隊友！
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#destinations"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-bright to-navy-400 px-7 py-3.5 text-base font-extrabold text-white shadow-xl shadow-cyan-bright/30"
            >
              <MapPin className="h-5 w-5" strokeWidth={2.6} />
              選擇你的目的地
            </motion.a>
            <ShopeeButton size="lg" label="🛒 立即在蝦皮購買" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-navy-600"
          >
            <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-orange-500" /> 即時交付</span>
            <span className="inline-flex items-center gap-1.5"><Globe2 className="h-4 w-4 text-cyan-bright" /> 190+ 國家</span>
            <span className="inline-flex items-center gap-1.5"><Signal className="h-4 w-4 text-mint-500" /> 原生網路</span>
          </motion.div>
        </div>

        <HeroMascot />
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: '7+', v: '目的地' },
            { k: '∞', v: '無限流量' },
            { k: '0', v: '漫遊費' },
            { k: '24h', v: '蝦皮聊聊' },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="rounded-2xl border-2 border-cyan-100 bg-cyan-50/50 px-4 py-4 text-center"
            >
              <div className="font-display text-2xl font-extrabold text-cyan-bright sm:text-3xl">{s.k}</div>
              <div className="mt-0.5 text-xs font-bold uppercase tracking-wide text-navy-500">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 90 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/50 to-orange-200/40 blur-2xl" />

      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-[2.5rem] border-2 border-cyan-200 bg-white shadow-2xl shadow-cyan-bright/15 sm:w-80">
          <img
            src="https://esim-murex.vercel.app/Untitled2222.png"
            alt="LEXGO 帶著護照旅行"
            className="relative h-full w-full object-cover"
          />
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-cyan-200 bg-white px-4 py-1.5 text-xs font-bold text-cyan-bright shadow-lg"
        >
          ⚡ QR Code 秒速交付！
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-2 top-8 grid h-14 w-14 place-items-center rounded-2xl border-2 border-orange-200 bg-white shadow-lg"
        >
          <Zap className="h-7 w-7 text-orange-500" strokeWidth={2.6} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-2 bottom-16 grid h-12 w-12 place-items-center rounded-2xl border-2 border-mint-400/40 bg-white shadow-lg"
        >
          <CheckCircle2 className="h-6 w-6 text-mint-500" strokeWidth={2.4} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
