export type Destination = {
  id: string;
  flag: string;
  flagUrl: string;
  name: string;
  tagline: string;
  points: string[];
  accent: string;
  gradient: string;
};

export const destinations: Destination[] = [
  {
    id: 'japan',
    flag: 'JP',
    flagUrl: 'https://flagcdn.com/w80/jp.png',
    name: '日本',
    tagline: '從東京到大阪，櫻花般的上網速度',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-pink-500',
    gradient: 'from-pink-400 to-rose-300',
  },
  {
    id: 'korea',
    flag: 'KR',
    flagUrl: 'https://flagcdn.com/w80/kr.png',
    name: '韓國',
    tagline: '追劇直播零緩衝，K-Pop 不間斷',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-cyan-500',
    gradient: 'from-cyan-400 to-blue-300',
  },
  {
    id: 'china',
    flag: 'CN',
    flagUrl: 'https://flagcdn.com/w80/cn.png',
    name: '中港澳',
    tagline: '一卡漫遊中港澳，通訊無國界',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-red-500',
    gradient: 'from-red-400 to-amber-300',
  },
  {
    id: 'europe',
    flag: 'EU',
    flagUrl: 'https://flagcdn.com/w80/eu.png',
    name: '歐洲',
    tagline: '一張 eSIM 暢遊 30+ 國，無國界',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-indigo-500',
    gradient: 'from-indigo-400 to-violet-300',
  },
  {
    id: 'north-america',
    flag: 'US',
    flagUrl: 'https://flagcdn.com/w80/us.png',
    name: '北美',
    tagline: '美加全境覆蓋，東西岸暢行無阻',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-sky-500',
    gradient: 'from-sky-400 to-cyan-300',
  },
  {
    id: 'thailand',
    flag: 'TH',
    flagUrl: 'https://flagcdn.com/w80/th.png',
    name: '泰國',
    tagline: '寺廟美食導航，全程滿速不打烊',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-fuchsia-500',
    gradient: 'from-fuchsia-400 to-pink-300',
  },
  {
    id: 'singapore',
    flag: 'SG',
    flagUrl: 'https://flagcdn.com/w80/sg.png',
    name: '新加坡',
    tagline: '花園城市獅城，訊號滿格不掉線',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-emerald-500',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    id: 'vietnam',
    flag: 'VN',
    flagUrl: 'https://flagcdn.com/w80/vn.png',
    name: '越南',
    tagline: '河內到胡志明，全程高速不中斷',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-red-600',
    gradient: 'from-red-500 to-yellow-300',
  },
  {
    id: 'malaysia',
    flag: 'MY',
    flagUrl: 'https://flagcdn.com/w80/my.png',
    name: '馬來西亞',
    tagline: '吉隆坡到檳城，暢遊無死角',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-blue-600',
    gradient: 'from-blue-500 to-red-300',
  },
  {
    id: 'philippines',
    flag: 'PH',
    flagUrl: 'https://flagcdn.com/w80/ph.png',
    name: '菲律賓',
    tagline: '千島之國，訊號無縫覆蓋每座島',
    points: ['真正無限流量', '不降速限制', '完美當地收訊'],
    accent: 'text-blue-500',
    gradient: 'from-blue-400 to-red-300',
  },
];

export const SHOPEE_URL = 'https://shopee.tw/shop/1695089765';
