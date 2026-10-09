import { motion, useReducedMotion } from 'motion/react';

export function ServiceArea() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="areas"
      className="w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] max-w-[1920px] mx-auto text-left overflow-hidden"
    >
      {/* H2 "Where we work." with masked reveal */}
      <div className="overflow-hidden mb-[34px]">
        <motion.h2
          initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-h2 text-[#1a1a1a]"
        >
          Where we work.
        </motion.h2>
      </div>

      {/* ONE large paragraph set in H2-size type where towns flow inline in a sentence */}
      <p className="font-h2 text-[#1a1a1a] leading-[1.15] text-left break-words">
        We&apos;re in{' '}
        <a href="#quote" className="underline text-[#1a1a1a] hover:text-[#0000ee] transition-colors inline">
          Oakland
        </a>
        ,{' '}
        <a href="#quote" className="underline text-[#1a1a1a] hover:text-[#0000ee] transition-colors inline">
          Berkeley
        </a>
        ,{' '}
        <a href="#quote" className="underline text-[#1a1a1a] hover:text-[#0000ee] transition-colors inline">
          Alameda
        </a>{' '}
        and across{' '}
        <a href="#quote" className="underline text-[#1a1a1a] hover:text-[#0000ee] transition-colors inline">
          Alameda County
        </a>{' '}
        and the East Bay.{' '}
        <span className="text-[#767676]">Not on the list?</span>{' '}
        <a
          href="tel:+15107268100"
          className="underline text-[#1a1a1a] hover:text-[#0000ee] transition-colors inline"
        >
          Call us.
        </a>
      </p>
    </section>
  );
}
