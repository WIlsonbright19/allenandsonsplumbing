import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';

export function PhotoBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const enableParallax = isDesktop && !shouldReduceMotion;

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden relative aspect-[4/5] md:aspect-[21/9]"
    >
      <motion.div
        style={{
          y: enableParallax ? parallaxY : 0,
          scale: enableParallax ? 1.2 : 1,
        }}
        className="w-full h-full relative"
      >
        <SafeImage
          image={IMAGES.photoBand}
          className="w-full h-full object-cover"
          rounded={false}
        />
      </motion.div>
    </section>
  );
}
