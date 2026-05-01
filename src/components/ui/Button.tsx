'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  id,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-indigo-500/40',
    outline:
      'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      id={id}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="contents">
        {content}
      </a>
    );
  }

  return <button onClick={onClick} className="contents">{content}</button>;
}
