'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, Variants } from 'motion/react';

export default function TiltCard({ children, className, variants }: {
  children: ReactNode; className?: string; variants?: Variants;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
