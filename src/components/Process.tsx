import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: (typeof IMAGES)[keyof typeof IMAGES];
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Call or message us',
    description: 'Reach our dispatch line directly. We take down your emergency and provide immediate arrival guidance.',
    image: IMAGES.processStep1,
  },
  {
    number: '02',
    title: 'We arrive and quote upfront',
    description: 'A licensed plumber evaluates the issue on-site and presents a fixed price before starting.',
    image: IMAGES.processStep2,
  },
  {
    number: '03',
    title: 'Fixed, tested, cleaned up',
    description: 'We complete the repair, pressure test the line, and leave your room spotless.',
    image: IMAGES.processStep3,
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 60%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] overflow-hidden bg-[#ffffff]"
    >
      {/* Decorative full-bleed photo at 6% opacity */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        aria-hidden="true"
      >
        <SafeImage
          image={IMAGES.processBg}
          className="w-full h-full object-cover"
          rounded={false}
        />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col items-start text-left">
        {/* H2 "How it works." with masked reveal */}
        <div className="overflow-hidden mb-[48px]">
          <motion.h2
            initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-h2 text-[#1a1a1a]"
          >
            How it works.
          </motion.h2>
        </div>

        {/* Vertical timeline */}
        <div ref={timelineRef} className="relative w-full flex flex-col gap-[48px] md:gap-[72px]">
          {/* Base background line (1px hairline) */}
          <div className="absolute left-[15px] md:left-[23px] top-[10px] bottom-[10px] w-[1px] bg-[#e5e7eb]" />

          {/* Fill line drawing downward in #1a1a1a */}
          <motion.div
            style={{
              scaleY: shouldReduceMotion ? 1 : lineScaleY,
              transformOrigin: 'top',
            }}
            className="absolute left-[15px] md:left-[23px] top-[10px] bottom-[10px] w-[1px] bg-[#1a1a1a]"
          />

          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative pl-[48px] md:pl-[72px] grid grid-cols-1 lg:grid-cols-12 gap-[20px] md:gap-[34px] items-center"
            >
              {/* Step indicator node on timeline */}
              <div className="absolute left-[11px] md:left-[19px] top-[4px] w-[9px] h-[9px] rounded-full bg-[#1a1a1a]" />

              {/* Text content (number, H3 title, copy) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="font-label text-[14px] text-[#767676] mb-[6px]">
                  Step {step.number}
                </span>
                <h3 className="font-h3 text-[#1a1a1a] mb-[12px] text-left">
                  {step.title}
                </h3>
                <p className="font-body text-[#767676] max-w-[560px] text-left">
                  {step.description}
                </p>
              </div>

              {/* 4:3 Image */}
              <div className="lg:col-span-5 w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#f4f4f4]">
                <SafeImage
                  image={step.image}
                  className="w-full h-full object-cover"
                  rounded={true}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
