import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, [role="button"], input, textarea, [data-cursor="pointer"]') !==
        null;
      setIsPointer(isInteractive);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="rounded-full border border-ink-400"
        animate={{
          width: isPointer ? 48 : 24,
          height: isPointer ? 48 : 24,
          backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 241, 234, 0)',
          borderColor: isPointer ? '#3b82f6' : '#7a7468',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ x: '-50%', y: '-50%' }}
      />
    </motion.div>
  );
}
