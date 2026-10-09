import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Appears after scrolling past the hero (e.g. 80% of viewport height)
      if (window.scrollY > window.innerHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-[12px] pb-[calc(12px+env(safe-area-inset-bottom,0px))] md:hidden pointer-events-none w-full max-w-full"
        >
          <a
            href="tel:+15107268100"
            className="pointer-events-auto w-full min-h-[56px] py-[16px] px-[20px] rounded-[40px] bg-[#1a1a1a] text-[#ffffff] font-medium text-[16px] sm:text-[18px] flex items-center justify-center text-center border border-[#1a1a1a] active:scale-[0.98] transition-transform break-words truncate"
          >
            Call now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
