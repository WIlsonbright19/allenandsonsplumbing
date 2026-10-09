import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';

export function RecentWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const largeDrift = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const smallDrift = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const enableParallax = isDesktop && !shouldReduceMotion;

  return (
    <section
      ref={containerRef}
      className="w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] max-w-[1920px] mx-auto text-left overflow-hidden"
    >
      {/* H2 "Recent work." with masked reveal */}
      <div className="overflow-hidden mb-[34px] md:mb-[48px]">
        <motion.h2
          initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-h2 text-[#1a1a1a]"
        >
          Recent work.
        </motion.h2>
      </div>

      {/* Asymmetrical 5-photo grid (1 large, 4 smaller, mixed aspect ratios) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] md:gap-[34px] items-start">
        {/* Photo 1: Large featured photo (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <motion.div
            style={{ y: enableParallax ? largeDrift : 0 }}
            className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#f4f4f4]"
          >
            <SafeImage
              image={IMAGES.work1}
              className="w-full h-full object-cover"
              rounded={true}
            />
          </motion.div>
          <span className="font-label text-[13px] sm:text-[14px] text-[#767676] mt-[8px] sm:mt-[12px] text-left break-words">
            Bathroom fixture installation, Oakland
          </span>
        </div>

        {/* Photos 2-5: Four smaller photos with mixed aspect ratios (5 cols on desktop) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[34px] w-full">
          {/* Photo 2 */}
          <div className="flex flex-col w-full">
            <motion.div
              style={{ y: enableParallax ? smallDrift : 0 }}
              className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#f4f4f4]"
            >
              <SafeImage
                image={IMAGES.work2}
                className="w-full h-full object-cover"
                rounded={true}
              />
            </motion.div>
            <span className="font-label text-[13px] sm:text-[14px] text-[#767676] mt-[8px] sm:mt-[12px] text-left break-words">
              Copper repiping & line repair, Berkeley
            </span>
          </div>

          {/* Photo 3 */}
          <div className="flex flex-col w-full">
            <motion.div
              style={{ y: enableParallax ? smallDrift : 0 }}
              className="w-full aspect-[1/1] rounded-[8px] overflow-hidden bg-[#f4f4f4]"
            >
              <SafeImage
                image={IMAGES.work3}
                className="w-full h-full object-cover"
                rounded={true}
              />
            </motion.div>
            <span className="font-label text-[13px] sm:text-[14px] text-[#767676] mt-[8px] sm:mt-[12px] text-left break-words">
              Tankless water heater replacement, Alameda
            </span>
          </div>

          {/* Photo 4 */}
          <div className="flex flex-col w-full">
            <motion.div
              style={{ y: enableParallax ? smallDrift : 0 }}
              className="w-full aspect-[1/1] rounded-[8px] overflow-hidden bg-[#f4f4f4]"
            >
              <SafeImage
                image={IMAGES.work4}
                className="w-full h-full object-cover"
                rounded={true}
              />
            </motion.div>
            <span className="font-label text-[13px] sm:text-[14px] text-[#767676] mt-[8px] sm:mt-[12px] text-left break-words">
              Kitchen sink & drain line install, Oakland
            </span>
          </div>

          {/* Photo 5 */}
          <div className="flex flex-col w-full">
            <motion.div
              style={{ y: enableParallax ? smallDrift : 0 }}
              className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#f4f4f4]"
            >
              <SafeImage
                image={IMAGES.work5}
                className="w-full h-full object-cover"
                rounded={true}
              />
            </motion.div>
            <span className="font-label text-[13px] sm:text-[14px] text-[#767676] mt-[8px] sm:mt-[12px] text-left break-words">
              Toilet replacement & rough-in, Oakland
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
