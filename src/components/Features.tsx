import { motion } from 'framer-motion';
import { Zap, Rocket, ShieldCheck } from 'lucide-react';
const features = [
  {
    icon: Zap,
    title: '快速 QR Code 交付',
    desc: '透過蝦皮聊聊即時收到你的 eSIM QR Code。免等待、免實體寄送！',
    accent: 'from-sun-400 to-orange-500',
    border: 'border-orange-200',
    glow: 'shadow-orange-400/20',
    bg: 'bg-orange-50/50',
    image: 'https://esim-murex.vercel.app/90499c0b-755c-400d-b982-b3dec9bcd109.png',
    badge: '⚡ 即時',
  },
  {
    icon: Rocket,
    title: '真正無限流量',
    desc: '不降速限制。享受完美收訊與原生當地網路的極速體驗。',
    accent: 'from-cyan-bright to-navy-400',
    border: 'border-cyan-200',
    glow: 'shadow-cyan-bright/20',
    bg: 'bg-cyan-50/50',
    image: 'https://esim-murex.vercel.app/09d62018-b7bc-465f-8e6a-2ee241928e8e.png',
    badge: '5G ∞',
  },
  {
    icon: ShieldCheck,
    title: '輕鬆設定',
    desc: '掃描、啟用、出發。零漫遊煩惱，一鍵搞定。',
    accent: 'from-mint-400 to-emerald-500',
    border: 'border-mint-400/40',
    glow: 'shadow-mint-400/20',
    bg: 'bg-mint-400/5',
    image: 'https://esim-murex.vercel.app/Gemini_Generated_Image_8v2bcj8v2bcj8v2b.png',
    badge: '✓ 簡單',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="為何選擇 LEXGO"
          title={
            <>
              讓旅行上網變得 <span className="text-cyan-bright">超簡單</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: -1 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 ${f.border} ${f.bg} p-6 backdrop-blur-sm`}
            >
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`} />

              <motion.div
                whileHover={{ scale: 1.12, rotate: -8 }}
                className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} shadow-lg ${f.glow}`}
              >
                <f.icon className="h-7 w-7 text-white" strokeWidth={2.6} />
              </motion.div>

              <h3 className="mt-5 font-display text-xl font-extrabold text-navy-900">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{f.desc}</p>

              <div className="relative mt-5 h-28 overflow-hidden rounded-2xl border-2 border-white/60 bg-white/80">
                <img
                  src={f.image}
                  alt={`LEXGO – ${f.title}`}
                  className="h-full w-full object-contain"
                />
                <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-navy-700 shadow-sm">
                  {f.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-300 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-bright">
        {eyebrow}
      </span>
      <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
