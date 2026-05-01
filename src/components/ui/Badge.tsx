interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200';
  const variants = {
    default: 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10',
    accent:  'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/25',
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
