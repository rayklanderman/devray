'use client';

import { useRef, ReactNode, ElementType } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function MagneticButton({ children, className, as = 'button', ...props }: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & Record<string, unknown>) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-20, Math.min(20, relX * 0.2)));
    y.set(Math.max(-20, Math.min(20, relY * 0.2)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = typeof as === 'string'
    ? (motion[as as keyof typeof motion] as typeof motion.button)
    : (motion.create(as as React.ComponentType) as typeof motion.button);

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      whileHover={{ scale: reduce ? 1 : 1.03 }}
      whileTap={{ scale: reduce ? 1 : 0.97 }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
