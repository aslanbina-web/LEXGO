import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '什麼是 eSIM？它怎麼運作？',
    a: 'eSIM 是內建在手機裡的數位 SIM 卡。不需要實體卡片，只要掃描 QR Code，手機就會即時連上當地網路 — 免換卡、免寄送。',
  },
  {
    q: '多快能收到 eSIM QR Code？',
    a: '下單後 QR Code 會透過蝦皮聊聊即時交付。免等待、免實體寄送，秒速到手。',
  },
  {
    q: '流量真的無限嗎？',
    a: '是的！每個目的地都提供真正無限流量、不降速，使用原生當地網路，收訊完美。',
  },
  {
    q: '怎麼確認手機支援 eSIM？',
    a: 'iPhone XS / XR 及更新機型、以及多數近期 Android 旗艦機（Samsung Galaxy S 系列、Google Pixel 等）皆支援 eSIM。購買前請先確認您的手機型號是否支援。',
  },
  {
    q: '要去哪裡購買 eSIM？',
    a: '所有購買都在我們的蝦皮官方賣場完成。點擊任何「在蝦皮商城選購」按鈕，即可直達我們的賣場。',
  },
  {
    q: '可以退款嗎？',
    a: 'eSIM QR Code 為一次性、唯一性的數位商品，一經交付即無法退款或退換貨。購買前請務必確認裝置相容性。',
  },
  {
    q: '有問題想聯絡客服？',
    a: '歡迎寄信到 support@lexgo.tw，我們會儘快回覆您。您也可以透過蝦皮聊聊與我們聯繫。',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-300 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-bright">
            <HelpCircle className="h-3.5 w-3.5" /> 常見問題
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            有問題？<span className="text-cyan-bright">LEXGO</span> 來解答
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border-2 transition-colors ${
                  isOpen ? 'border-cyan-300 bg-cyan-50/40' : 'border-cyan-100 bg-white hover:border-cyan-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-bold text-navy-900 sm:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen ? 'bg-cyan-bright text-white' : 'bg-cyan-100 text-cyan-bright'
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.6} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
