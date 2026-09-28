import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const smoothX = useSpring(x, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed z-0 w-125 h-125 rounded-full opacity-40 hidden lg:block"
    >
      <div className="w-full h-full rounded-full bg-linear-to-br from-lime-400/10 to-emerald-500/10 blur-[100px]" />
    </motion.div>
  );
}
