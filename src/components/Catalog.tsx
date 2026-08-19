import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';
import ShopeeButton from './ShopeeButton';
import { destinations } from '@/data/destinations';

export default function Catalog() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-300 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-bright">
            <MapPin className="h-3.5 w-3.5" /> 目錄模式
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            選擇你的旅遊 <span className="text-cyan-bright">目的地</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy-600">
            選好國家、點下按鈕，eSIM QR Code 透過蝦皮聊聊即時交付到你手中。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
          className="relative mx-auto mt-10 hidden h-28 w-28 sm:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-cyan-200 bg-white shadow-lg"
          >
            <img
              src="https://esim-murex.vercel.app/Screenshot_2026-08-09_165702.png"
              alt="LEXGO 超級英雄吉祥物"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-cyan-100 bg-white p-6 shadow-lg shadow-cyan-bright/5 transition-colors hover:border-cyan-300"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${d.gradient} opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-30`} />

              <div className="flex items-center gap-4">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border-2 border-cyan-100 bg-cyan-50/50 shadow-inner"
                >
                  <img
                    src={d.flagUrl}
                    alt={`${d.flag} 國旗`}
                    className="h-full w-full object-contain p-1.5"
                    loading="lazy"
                  />
                </motion.span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-navy-900">
                    <span className="mr-2 text-sm font-bold text-navy-400">{d.flag}</span>{d.name}
                  </h3>
                  <p className="text-xs font-semibold text-navy-500">{d.tagline}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {d.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm font-bold text-navy-700">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-500/15">
                      <Check className="h-3 w-3 text-mint-500" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <ShopeeButton
                size="md"
                label="🛒 在蝦皮商城選購"
                full
                className="mt-6"
              />
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-sm font-semibold text-navy-500"
        >
          所有訂單皆透過我們的蝦皮官方賣場處理，保障您的購物安全。
        </motion.p>
      </div>
    </section>
  );
}
