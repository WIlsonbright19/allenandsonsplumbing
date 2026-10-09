import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';
import { QuoteForm } from './QuoteForm.tsx';

interface HeroProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
}

export function Hero({ selectedService = 'Emergency plumbing', onServiceChange }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Words or lines for H1 reveal
  const h1Lines = ['Pipe burst? Call now.'];

  return (
    <>
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden">
        {/* Background Photo with motion scale 1.08 to 1 */}
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <SafeImage
            image={IMAGES.hero}
            isHero={true}
            rounded={false}
            className="w-full h-full object-cover"
          />
          {/* Flat #1a1a1a overlay at 55% opacity (single solid overlay, NEVER a gradient) */}
          <div
            className="absolute inset-0 bg-[#1a1a1a] opacity-55"
            aria-hidden="true"
          />
        </motion.div>

        {/* Main hero content container */}
        <div className="relative z-10 w-full px-[16px] sm:px-[20px] md:px-[48px] pb-[20px] md:pb-[34px] pt-[80px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px]">
          {/* Left column: Badge/Card (mobile), Label, H1, SEO line, sentence, buttons */}
          <div className="max-w-[760px] xl:max-w-[840px] w-full flex flex-col items-start text-left">
            {/* Mobile card (moves directly above the label row on mobile & small tablet) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:hidden bg-[#ffffff] text-[#1a1a1a] rounded-[8px] p-[10px] sm:p-[12px] border border-[#e5e7eb] mb-[10px] sm:mb-[14px] flex flex-col text-left max-w-fit"
            >
              <span className="font-medium text-[13px] sm:text-[14px] leading-tight text-left">
                Fully stocked service trucks
              </span>
              <span className="font-label text-[12px] sm:text-[13px] text-[#767676] leading-tight mt-[3px] text-left">
                Upfront pricing. No surprises.
              </span>
            </motion.div>

            {/* Small label row ("Family plumbers serving Oakland" + pulsing #0000ee dot + "Open 24/7") */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-[8px] sm:gap-[12px] text-[#ffffff] font-label text-[13px] sm:text-[14px] md:text-[15px] mb-[10px] sm:mb-[14px] md:mb-[16px] lg:mb-[20px] text-left"
            >
              <span>Family plumbers serving Oakland</span>
              <span className="inline-block text-[#ffffff] opacity-40">/</span>
              <div className="flex items-center gap-[6px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000ee] opacity-75 duration-1000" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000ee]" />
                </span>
                <span>Open 24/7</span>
              </div>
            </motion.div>

            {/* Giant H1: max 5 words, direct and human. Reveals line by line from overflow-hidden mask */}
            <div className="overflow-hidden mb-[10px] sm:mb-[12px] md:mb-[16px] lg:mb-[18px] w-full">
              {h1Lines.map((line, idx) => (
                <motion.h1
                  key={idx}
                  initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.08 }}
                  className="font-display text-[clamp(34px,9vw,112px)] leading-[0.94] sm:leading-[0.92] tracking-[-0.055em] font-medium text-[#ffffff] text-left break-words"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            {/* SEO line directly beneath H1 */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="font-medium text-[clamp(14px,2.2vw,22px)] text-[#ffffff] opacity-90 mb-[12px] sm:mb-[14px] md:mb-[18px] lg:mb-[22px] text-left leading-snug"
            >
              Plumber in Oakland, CA
            </motion.div>

            {/* Supporting sentence: max 20 words */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="font-body text-[#ffffff] max-w-[440px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[620px] text-[clamp(14px,1.4vw,18px)] leading-[1.6] md:leading-[1.65] mb-[20px] sm:mb-[26px] md:mb-[32px] lg:mb-[36px] text-left opacity-95"
            >
              Family-owned and open 24/7. Burst pipes, clogged drains and water heater failures handled across Oakland and the East Bay.
            </motion.p>

            {/* Two buttons side by side: Primary inverted white & Secondary */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col xs:flex-row flex-wrap sm:flex-nowrap items-stretch xs:items-center gap-[10px] sm:gap-[14px] lg:gap-[16px] w-full sm:w-auto"
            >
              <a
                href="tel:+15107268100"
                className="btn-primary-dark shrink-0 justify-start text-left"
              >
                Call now
              </a>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-secondary-dark shrink-0 justify-start text-left cursor-pointer"
              >
                Get a free quote
              </button>
            </motion.div>
          </div>

          {/* Desktop right-side card: Quote Request Form in the Hero */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden lg:flex flex-col bg-[#ffffff] text-[#1a1a1a] rounded-[8px] p-[20px] border border-[#e5e7eb] w-[340px] xl:w-[370px] shrink-0 text-left"
          >
            <div className="mb-[14px] text-left">
              <h3 className="font-medium text-[18px] text-[#1a1a1a] leading-tight text-left">
                Request a quote
              </h3>
              <p className="font-label text-[13px] text-[#767676] mt-[4px] text-left">
                Upfront pricing &bull; Fast dispatch
              </p>
            </div>

            <QuoteForm
              variant="hero"
              selectedService={selectedService}
              onServiceChange={onServiceChange}
              idPrefix="hero-card"
            />

            <div className="mt-[14px] pt-[12px] border-t border-[#e5e7eb] flex items-center justify-between text-left">
              <span className="font-label text-[12px] text-[#767676] text-left">
                Stocked service trucks
              </span>
              <span className="font-label text-[12px] text-[#1a1a1a] text-left">
                No surprises
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Request Modal (triggered by 'Get a free quote' button) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] sm:p-[20px]">
            {/* Flat #1a1a1a backdrop at 60% opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#1a1a1a]"
              aria-hidden="true"
            />

            {/* Modal Dialog Box */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="hero-modal-title"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[460px] bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[20px] sm:p-[28px] text-left max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between pb-[16px] border-b border-[#e5e7eb] mb-[18px] text-left">
                <div>
                  <h3 id="hero-modal-title" className="font-medium text-[20px] text-[#1a1a1a] text-left">
                    Request a free quote
                  </h3>
                  <p className="font-label text-[13px] text-[#767676] mt-[3px] text-left">
                    Fast response &bull; Upfront pricing guaranteed
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close dialog"
                  className="w-[36px] h-[36px] rounded-full border border-[#e5e7eb] bg-[#ffffff] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f4f4f4] transition-colors cursor-pointer shrink-0"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <QuoteForm
                variant="hero"
                selectedService={selectedService}
                onServiceChange={onServiceChange}
                idPrefix="hero-modal"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
