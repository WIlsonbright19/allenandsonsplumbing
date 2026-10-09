import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';
import { QuoteForm } from './QuoteForm.tsx';

interface FinalCTAProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export function FinalCTA({ selectedService, onServiceChange }: FinalCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="quote" className="w-full border-t border-[#e5e7eb] bg-[#ffffff]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        {/* LEFT half: #1a1a1a background with full-bleed photo & flat 75% overlay */}
        <div className="relative overflow-hidden bg-[#1a1a1a] p-[20px] md:p-[48px] flex flex-col justify-end min-h-[360px] lg:min-h-[640px]">
          {/* Photo background with scale animation */}
          <motion.div
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <SafeImage
              image={IMAGES.ctaPhoneBg}
              className="w-full h-full object-cover"
              rounded={false}
            />
            {/* Flat #1a1a1a overlay at 75% opacity (single solid overlay, NO gradients) */}
            <div
              className="absolute inset-0 bg-[#1a1a1a] opacity-75"
              aria-hidden="true"
            />
          </motion.div>

          {/* Bottom-left content */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-full">
            <span className="font-label text-[14px] text-[#ffffff] opacity-80 mb-[12px] sm:mb-[16px] text-left">
              Call any time
            </span>
            <a
              href="tel:+15107268100"
              className="btn-primary-dark shrink-0 justify-start text-left"
            >
              Call now
            </a>
          </div>
        </div>

        {/* RIGHT half: white background, H3 heading, quote form */}
        <div className="bg-[#ffffff] p-[20px] sm:p-[34px] md:p-[48px] flex flex-col justify-center text-left">
          <div className="max-w-[560px] w-full">
            <h3 className="font-h3 text-[#1a1a1a] mb-[20px] text-left">
              Request a free quote
            </h3>

            <QuoteForm
              variant="cta"
              selectedService={selectedService}
              onServiceChange={onServiceChange}
              idPrefix="final-cta"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
