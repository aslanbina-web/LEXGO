import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { SHOPEE_URL } from '@/data/destinations';

type Props = {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  className?: string;
};

export default function ShopeeButton({
  label = '🛒 在蝦皮商城選購',
  size = 'md',
  full = false,
  className = '',
}: Props) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <motion.a
      href={SHOPEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#EE4D2D] font-extrabold text-white shadow-lg shadow-[#EE4D2D]/30 transition-colors hover:bg-[#D73211] ${sizes[size]} ${
        full ? 'w-full' : ''
      } ${className}`}
    >
      <ShoppingBag className="h-4 w-4 shrink-0" strokeWidth={2.6} />
      <span>{label}</span>
    </motion.a>
  );
}
