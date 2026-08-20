import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BatteryCharging, Cable, Check, ChevronRight, Globe2, Languages, Menu, Network, PackageCheck, Router, Scale, ShieldCheck, ShoppingBag, Smartphone, X, Zap } from 'lucide-react';

const SHOPEE_URL = 'https://shopee.tw/shop/1695089765';
type Lang = 'zh' | 'en';
type Product = { id:string; category:string; zh:string; en:string; detailZh:string; detailEn:string; statusZh:string; statusEn:string; icon:any; accent:string };

const products: Product[] = [
  {id:'sim',category:'connect',zh:'LEXGO 國際上網卡',en:'LEXGO Travel SIM',detailZh:'實體 SIM 卡・多國網路方案・方案詳情請見蝦皮',detailEn:'Physical SIM · Multi-country plans · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Smartphone,accent:'cyan'},
  {id:'esim',category:'connect',zh:'LEXGO eSIM',en:'LEXGO eSIM',detailZh:'數位開通・免換卡・方案詳情請見蝦皮',detailEn:'Digital delivery · No card swap · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Globe2,accent:'blue'},
  {id:'network-card',category:'connect',zh:'LEXGO 網路卡',en:'LEXGO Network Card',detailZh:'穩定連線的網路介面方案',detailEn:'Reliable network interface solution',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:Network,accent:'cyan'},
  {id:'sharing',category:'network',zh:'LEXGO 網路分享裝置',en:'LEXGO Mobile Hotspot',detailZh:'行動網路分享・多人同時連線・詳細規格請見蝦皮',detailEn:'Portable sharing · Multi-device access · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Router,accent:'orange'},
  {id:'internet',category:'network',zh:'LEXGO 網際網路設備',en:'LEXGO Internet Equipment',detailZh:'家庭與行動網路設備',detailEn:'Home and mobile internet equipment',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:Router,accent:'blue'},
  {id:'communication',category:'network',zh:'LEXGO 網路通訊設備',en:'LEXGO Network Communication',detailZh:'可靠、簡潔的通訊硬體',detailEn:'Reliable, simple communication hardware',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:Network,accent:'cyan'},
  {id:'charger',category:'power',zh:'LEXGO 快速充電器',en:'LEXGO Fast Charger',detailZh:'日常與旅行使用的快速充電方案・詳細規格請見蝦皮',detailEn:'Fast charging for daily life and travel · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Zap,accent:'orange'},
  {id:'phone-charger',category:'power',zh:'LEXGO 手機充電器',en:'LEXGO Mobile Charger',detailZh:'輕巧、安全、隨時補充電力・詳細規格請見蝦皮',detailEn:'Compact, safe mobile charging · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:BatteryCharging,accent:'blue'},
  {id:'power-bank',category:'power',zh:'LEXGO 行動電源',en:'LEXGO Power Bank',detailZh:'行動生活的隨身電力',detailEn:'Portable power for life on the move',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:BatteryCharging,accent:'cyan'},
  {id:'cable',category:'power',zh:'LEXGO 充電線',en:'LEXGO Charging Cable',detailZh:'耐用、簡潔的充電與傳輸配件・詳細規格請見蝦皮',detailEn:'Durable charging and data accessory · Details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Cable,accent:'orange'},
  {id:'scale',category:'measure',zh:'LEXGO 智慧電子秤',en:'LEXGO Digital Scale',detailZh:'清楚顯示・日常精準量測',detailEn:'Clear display · Everyday precision',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:Scale,accent:'blue'},
  {id:'spring-scale',category:'measure',zh:'LEXGO 自動指示彈簧秤',en:'LEXGO Spring Scale',detailZh:'直覺刻度・快速讀值',detailEn:'Intuitive scale · Quick readings',statusZh:'已向供應商訂購',statusEn:'Supplier order placed',icon:Scale,accent:'cyan'},
  {id:'case',category:'accessory',zh:'LEXGO 手機殼',en:'LEXGO Phone Case',detailZh:'簡潔保護・日常風格・適用型號請見蝦皮',detailEn:'Simple protection · Models and details on Shopee',statusZh:'蝦皮販售中',statusEn:'Available on Shopee',icon:Smartphone,accent:'orange'},
];

const categories = [
  {key:'all',zh:'全部產品',en:'All products'}, {key:'connect',zh:'SIM・eSIM',en:'SIM & eSIM'},
  {key:'network',zh:'網路設備',en:'Networking'}, {key:'power',zh:'充電電力',en:'Power'},
  {key:'measure',zh:'量測產品',en:'Measurement'}, {key:'accessory',zh:'行動配件',en:'Accessories'}
];

const copy = {
 zh:{navProducts:'產品系列',navReady:'上市準備',navAbout:'關於 LEXGO',shop:'前往蝦皮商城',eyebrow:'台灣通訊與行動科技品牌',heroA:'連線，',heroB:'現在就 GO',heroText:'從 SIM、eSIM 到網路設備與行動配件，LEXGO 正在為台灣市場準備一套更簡單、更可靠的連線生活。',view:'查看產品',ready:'品牌上市準備進行中',readyText:'產品規劃、品牌識別、銷售通路與售後支援同步建置。實際販售與付款均由蝦皮商城完成。',productTitle:'一個品牌，連接每個日常',productText:'依產品類別快速瀏覽；所有購買按鈕將帶你前往 LEXGO 蝦皮商城。',shopee:'到蝦皮查看',evidence:'上市準備',evidenceTitle:'不是概念，是正在落地的產品計畫',evidenceText:'LEXGO 以清楚的產品分類、品牌標示、銷售通路與服務政策，逐步完成台灣市場上市準備。',steps:['品牌與包裝識別確認','產品規格與供應準備','蝦皮銷售通路建置','客服、保固與退換貨流程'],about:'關於 LEXGO',aboutText:'LEXGO 由臻鼎行銷國際有限公司營運，專注於 SIM、eSIM、網路通訊設備、充電電力與行動生活產品。',company:'臻鼎行銷國際有限公司',tax:'統一編號 93700252',support:'support@lexgo.tw',footer:'© 2026 LEXGO. All rights reserved.'},
 en:{navProducts:'Products',navReady:'Launch readiness',navAbout:'About LEXGO',shop:'Shop on Shopee',eyebrow:'Taiwan connectivity & mobile technology',heroA:'Stay connected.',heroB:'Just GO.',heroText:'From SIM and eSIM to networking equipment and mobile accessories, LEXGO is preparing a simpler, more dependable connected life for Taiwan.',view:'Explore products',ready:'Preparing for launch in Taiwan',readyText:'Product planning, brand identity, sales channels, and support operations are being developed together. Orders and payments are completed securely on Shopee.',productTitle:'One brand for every connection',productText:'Browse by category. Every purchase button redirects to the official LEXGO Shopee store.',shopee:'View on Shopee',evidence:'Launch readiness',evidenceTitle:'Not just an idea—a product plan in motion',evidenceText:'LEXGO is preparing for Taiwan market launch through clear product categories, branded presentation, sales channels, and service policies.',steps:['Brand and packaging identity','Product specification and supply preparation','Shopee sales channel setup','Support, warranty and returns process'],about:'About LEXGO',aboutText:'LEXGO is operated by Zhen Ding Marketing International Co., Ltd., focused on SIM, eSIM, network communication equipment, power products, and mobile essentials.',company:'Zhen Ding Marketing International Co., Ltd.',tax:'Unified Business No. 93700252',support:'support@lexgo.tw',footer:'© 2026 LEXGO. All rights reserved.'}
};

function Logo({light=false}:{light?:boolean}) { return <a href="/" className={`logo ${light?'logo-light':''}`} aria-label="LEXGO home"><span>LEX</span><svg viewBox="0 0 84 42" aria-hidden="true"><path d="M4 21C14 2 31 2 42 21S70 40 80 21"/><path d="M4 21C14 40 31 40 42 21S70 2 80 21"/></svg></a> }

function ProductVisual({p}:{p:Product}) { const Icon=p.icon; return <div className={`product-visual ${p.accent}`}><div className="product-device"><span className="mini-logo">LEX<span>GO</span></span><Icon size={46}/><small>{p.id.toUpperCase()}</small></div><div className="orbit orbit-a"/><div className="orbit orbit-b"/></div> }

export default function App(){
 const [lang,setLang]=useState<Lang>('zh'); const [menu,setMenu]=useState(false); const [filter,setFilter]=useState('all');
 useEffect(()=>{document.documentElement.lang=lang==='zh'?'zh-Hant':'en'},[lang]);
 const t=copy[lang]; const shown=useMemo(()=>filter==='all'?products:products.filter(p=>p.category===filter),[filter]);
 return <div>
  <header><div className="nav-wrap"><Logo/><nav className={menu?'open':''}><a href="#products">{t.navProducts}</a><a href="#readiness">{t.navReady}</a><a href="#about">{t.navAbout}</a><a className="nav-shop" href={SHOPEE_URL} target="_blank" rel="noreferrer">{t.shop}<ArrowRight size={16}/></a></nav><div className="nav-actions"><button className="lang" onClick={()=>setLang(lang==='zh'?'en':'zh')}><Languages size={17}/>{lang==='zh'?'EN':'繁中'}</button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="menu">{menu?<X/>:<Menu/>}</button></div></div></header>
  <main>
   <section className="hero"><div className="hero-glow one"/><div className="hero-glow two"/><div className="hero-inner"><div className="hero-copy"><div className="eyebrow"><span/><span>{t.eyebrow}</span></div><h1>{t.heroA}<br/><em>{t.heroB}</em></h1><p>{t.heroText}</p><div className="hero-buttons"><a className="btn primary" href="#products">{t.view}<ChevronRight size={18}/></a><a className="btn secondary" href={SHOPEE_URL} target="_blank" rel="noreferrer"><ShoppingBag size={18}/>{t.shop}</a></div><div className="status"><PackageCheck/><div><strong>{t.ready}</strong><span>{t.readyText}</span></div></div></div><div className="hero-art"><div className="loop-mark"><svg viewBox="0 0 240 120"><path d="M10 60C40 5 88 5 120 60S200 115 230 60"/><path d="M10 60C40 115 88 115 120 60S200 5 230 60"/></svg><div className="loop-dot"/></div><div className="floating-card card-one"><Network/><span>SIM / eSIM</span></div><div className="floating-card card-two"><Zap/><span>POWER</span></div><div className="floating-card card-three"><Router/><span>NETWORK</span></div></div></div></section>
   <section className="products" id="products"><div className="section-head"><div><span className="kicker">LEXGO PRODUCT SYSTEM</span><h2>{t.productTitle}</h2><p>{t.productText}</p></div><div className="count">{String(products.length).padStart(2,'0')}<small>PRODUCT LINES</small></div></div><div className="filters">{categories.map(c=><button key={c.key} onClick={()=>setFilter(c.key)} className={filter===c.key?'active':''}>{lang==='zh'?c.zh:c.en}</button>)}</div><div className="product-grid">{shown.map(p=><article className="product-card" key={p.id}><ProductVisual p={p}/><div className="product-info"><span className="product-status"><i/>{lang==='zh'?p.statusZh:p.statusEn}</span><h3>{lang==='zh'?p.zh:p.en}</h3><p>{lang==='zh'?p.detailZh:p.detailEn}</p><a href={SHOPEE_URL} target="_blank" rel="noreferrer">{t.shopee}<ArrowRight size={17}/></a></div></article>)}</div></section>
   <section className="readiness" id="readiness"><div className="readiness-copy"><span className="kicker">{t.evidence}</span><h2>{t.evidenceTitle}</h2><p>{t.evidenceText}</p><a className="btn white" href={SHOPEE_URL} target="_blank" rel="noreferrer">{t.shop}<ArrowRight size={18}/></a></div><div className="steps">{t.steps.map((s,i)=><div className="step" key={s}><span>0{i+1}</span><strong>{s}</strong><Check/></div>)}</div></section>
   <section className="about" id="about"><div><span className="kicker">{t.about}</span><h2>LEX<span>GO</span></h2></div><div className="about-copy"><p>{t.aboutText}</p><div className="company"><ShieldCheck/><div><strong>{t.company}</strong><span>{t.tax}</span><a href={`mailto:${t.support}`}>{t.support}</a></div></div></div></section>
  </main>
  <footer><div><Logo light/><p>{t.footer}</p></div><a href={SHOPEE_URL} target="_blank" rel="noreferrer">{t.shop}<ArrowRight size={16}/></a></footer>
 </div>
}

