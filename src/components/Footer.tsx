import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Shield, ChevronDown, Building2, MapPin, Hash, Mail } from 'lucide-react';
import ShopeeButton from './ShopeeButton';

export default function Footer() {
  const [openLegal, setOpenLegal] = useState<string | null>('refund');
  const [modal, setModal] = useState<null | 'terms' | 'privacy'>(null);

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute left-1/2 -top-32 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-cyan-bright/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <FooterMascot />

            <div className="mt-6 h-10 w-10 overflow-hidden rounded-xl border border-white/20 bg-white shadow-md shadow-cyan-bright/20">
              <img
                src="https://esim-murex.vercel.app/photo_2026-08-06_21-44-40.jpg"
                alt="LEXGO"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-200">
              你最強的旅遊上網夥伴。即時 eSIM QR Code 交付、真正無限流量、零漫遊費 — 全程透過蝦皮官方賣場完成購買。
            </p>

            <div className="mt-6">
              <ShopeeButton size="md" label="🛒 立即在蝦皮購買" />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-navy-200">
              <a href="#features" className="transition hover:text-cyan-glow">特色</a>
              <a href="#faq" className="transition hover:text-cyan-glow">常見問題</a>
              <a href="#destinations" className="transition hover:text-cyan-glow">目的地</a>
            </div>

            <a
              href="mailto:support@lexgo.tw"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-bright/30 bg-cyan-bright/10 px-4 py-2 text-sm font-bold text-cyan-glow transition hover:bg-cyan-bright/20"
            >
              <Mail className="h-4 w-4" />
              support@lexgo.tw
            </a>
          </div>

          <div className="grid gap-3">
            <LegalAccordion
              id="refund"
              icon={<Shield className="h-4 w-4" />}
              title="退換貨政策 (Refund & Return Policy)"
              openId={openLegal}
              setOpen={setOpenLegal}
            >
              <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-navy-100 marker:font-bold marker:text-cyan-glow">
                <li>
                  <span className="font-bold text-white">數位商品性質：</span>
                  本店販售之 eSIM 為非實體之數位網卡（虛擬商品）。依據台灣《消費者保護法》規定，非以有形媒介提供之數位內容或一經提供即為完成之線上服務，經消費者事先同意始提供者，不適用 7 天鑑賞期。
                </li>
                <li>
                  <span className="font-bold text-white">發貨與退費：</span>
                  eSIM QR Code 具備一次性與唯一性，一經蝦皮聊聊、系統或 Email 發送交付後，即視為交易完成，恕不接受任何理由之退換貨或退款。
                </li>
                <li>
                  <span className="font-bold text-white">裝置相容性確認：</span>
                  購買前請務必自行確認您的智慧型手機型號是否支援 eSIM 功能。若因買家未確認設備支援度而導致購買後無法掃描或使用，本公司依法不負退款責任。
                </li>
              </ol>
            </LegalAccordion>

            <LegalAccordion
              id="operator"
              icon={<Building2 className="h-4 w-4" />}
              title="營運商資訊 (Operator Info)"
              openId={openLegal}
              setOpen={setOpenLegal}
            >
              <ul className="space-y-2.5 text-sm leading-relaxed text-navy-100">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 font-bold text-cyan-glow">品牌：</span>
                  <span className="font-bold text-white">LEXGO</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 font-bold text-cyan-glow">營運商：</span>
                  <span>臻鼎行銷國際有限公司</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Hash className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" />
                  <span><span className="font-bold text-white">統一編號：</span>93700252</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" />
                  <span><span className="font-bold text-white">地址：</span>臺中市南屯區惠中里文心路一段378號7樓之10</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" />
                  <a href="mailto:support@lexgo.tw" className="font-bold text-cyan-glow transition hover:text-white">support@lexgo.tw</a>
                </li>
              </ul>
            </LegalAccordion>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setModal('terms')}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-navy-100 transition hover:bg-white/10 hover:text-white"
              >
                <FileText className="h-3.5 w-3.5" /> 服務條款 Terms of Service
              </button>
              <button
                onClick={() => setModal('privacy')}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-navy-100 transition hover:bg-white/10 hover:text-white"
              >
                <Shield className="h-3.5 w-3.5" /> 隱私權政策 Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-300">
            © {new Date().getFullYear()} LEXGO · 營運商：臻鼎行銷國際有限公司 · 統一編號 93700252
          </p>
          <p className="text-xs text-navy-300">
            所有購買皆於蝦皮官方賣場完成
          </p>
        </div>
      </div>

      <LegalModal type={modal} onClose={() => setModal(null)} />
    </footer>
  );
}

function FooterMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
      className="relative w-40"
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-cyan-bright/20 bg-white shadow-xl">
          <img
            src="https://esim-murex.vercel.app/Screenshot_2026-08-09_165544.png"
            alt="LEXGO 聯絡資訊"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function LegalAccordion({
  id,
  icon,
  title,
  openId,
  setOpen,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  openId: string | null;
  setOpen: (v: string | null) => void;
  children: React.ReactNode;
}) {
  const isOpen = openId === id;
  return (
    <div className={`overflow-hidden rounded-2xl border transition-colors ${
      isOpen ? 'border-cyan-bright/30 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'
    }`}>
      <button
        onClick={() => setOpen(isOpen ? null : id)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="inline-flex items-center gap-2.5 font-display text-sm font-bold text-white sm:text-base">
          <span className="text-cyan-glow">{icon}</span>
          {title}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-cyan-glow">
          <ChevronDown className="h-4 w-4" />
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
            <div className="px-5 pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LegalModal({ type, onClose }: { type: null | 'terms' | 'privacy'; onClose: () => void }) {
  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-navy-100 bg-white px-6 py-4">
              <h3 className="font-display text-xl font-extrabold text-navy-900">
                {type === 'terms' ? '服務條款 Terms of Service' : '隱私權政策 Privacy Policy'}
              </h3>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full bg-navy-100 text-navy-700 transition hover:bg-navy-200"
                aria-label="關閉"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="h-4 w-4"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-6 py-5 text-sm leading-relaxed text-navy-700">
              {type === 'terms' ? <TermsContent /> : <PrivacyContent />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TermsContent() {
  return (
    <div className="space-y-4">
      <p className="font-bold text-navy-900">最後更新日期：2025 年 1 月</p>
      <p>歡迎使用 LEXGO 服務（以下簡稱「本服務」），由臻鼎行銷國際有限公司（以下簡稱「本公司」）營運。使用本服務即表示您同意以下條款：</p>
      <div>
        <p className="font-bold text-navy-900">1. 服務性質</p>
        <p className="mt-1">本網站為「目錄模式」展示平台，僅提供 eSIM 產品資訊與品牌介紹。所有實際購買交易皆於蝦皮（Shopee）官方賣場進行，適用蝦皮平台之交易規範。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">2. 數位商品說明</p>
        <p className="mt-1">本店販售之 eSIM 為非實體之數位網卡（虛擬商品），一經交付即視為服務完成。依據台灣《消費者保護法》規定，非以有形媒介提供之數位內容不適用 7 天鑑賞期。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">3. 退換貨政策</p>
        <p className="mt-1">eSIM QR Code 具備一次性與唯一性，一經交付後恕不接受任何理由之退換貨或退款。購買前請務必確認您的裝置支援 eSIM 功能。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">4. 使用者責任</p>
        <p className="mt-1">您應自行確認手機型號是否支援 eSIM，並依照指示完成掃描與啟用。因裝置不相容或操作不當導致無法使用，本公司不負退款責任。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">5. 服務變更</p>
        <p className="mt-1">本公司保留隨時修改、暫停或終止本服務之權利，無需另行通知。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">6. 準據法</p>
        <p className="mt-1">本條款依中華民國（台灣）法律解釋與適用。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">聯絡資訊</p>
        <p className="mt-1">營運商：臻鼎行銷國際有限公司<br/>統一編號：93700252<br/>地址：臺中市南屯區惠中里文心路一段378號7樓之10<br/>Email：<a href="mailto:support@lexgo.tw" className="font-bold text-cyan-bright">support@lexgo.tw</a></p>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-4">
      <p className="font-bold text-navy-900">最後更新日期：2025 年 1 月</p>
      <p>臻鼎行銷國際有限公司（以下簡稱「本公司」）重視您的隱私。本政策說明我們如何收集、使用與保護您的個人資料：</p>
      <div>
        <p className="font-bold text-navy-900">1. 收集的資料</p>
        <p className="mt-1">本網站不要求註冊或登入，不直接收集您的個人資料。實際購買時由蝦皮平台處理訂單與交易資料，適用蝦皮之隱私權政策。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">2. eSIM 交付</p>
        <p className="mt-1">eSIM QR Code 透過蝦皮聊聊或系統訊息交付。QR Code 本身不包含您的個人身份資訊，僅為網路啟用憑證。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">3. Cookies 與分析</p>
        <p className="mt-1">本網站可能使用匿名分析工具了解瀏覽行為，不涉及可識別個人之資料。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">4. 資料安全</p>
        <p className="mt-1">本公司採取合理措施保護交易安全。eSIM QR Code 為一次性憑證，請妥善保管，勿外洩予他人。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">5. 第三方服務</p>
        <p className="mt-1">所有交易透過蝦皮官方賣場進行，蝦皮平台之隱私權政策適用於交易過程中之個人資料處理。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">6. 您的權利</p>
        <p className="mt-1">依台灣《個人資料保護法》，您得請求查詢、閱覽、複製、補充或更正、停止處理或利用、刪除您的個人資料。相關請求請透過蝦皮聊聊聯繫本公司。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">7. 政策更新</p>
        <p className="mt-1">本公司保留隨時更新本隱私權政策之權利，更新後將於本頁面公告。</p>
      </div>
      <div>
        <p className="font-bold text-navy-900">聯絡資訊</p>
        <p className="mt-1">營運商：臻鼎行銷國際有限公司<br/>統一編號：93700252<br/>地址：臺中市南屯區惠中里文心路一段378號7樓之10<br/>Email：<a href="mailto:support@lexgo.tw" className="font-bold text-cyan-bright">support@lexgo.tw</a></p>
      </div>
    </div>
  );
}
