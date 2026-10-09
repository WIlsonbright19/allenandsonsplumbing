import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [rating, setRating] = useState('0.0');
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setRating((ease * 4.8).toFixed(1));
      setReviews(Math.floor(ease * 137));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setRating('4.8');
        setReviews(137);
      }
    };
    requestAnimationFrame(step);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#1a1a1a] text-[#ffffff] border-b border-[#e5e7eb]"
    >
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.2)]">
        {/* Cell 1 */}
        <div className="p-[16px] sm:p-[20px] md:p-[34px] flex flex-col justify-center text-left border-r border-[rgba(255,255,255,0.2)] lg:border-r-0">
          <span className="font-label text-[12px] sm:text-[14px] text-[#ffffff] opacity-70 mb-[4px] sm:mb-[6px]">Availability</span>
          <span className="font-medium text-[13px] sm:text-[16px] md:text-[18px] text-[#ffffff] tracking-tight break-words">
            24/7 EMERGENCY SERVICE
          </span>
        </div>

        {/* Cell 2 */}
        <div className="p-[16px] sm:p-[20px] md:p-[34px] flex flex-col justify-center text-left">
          <span className="font-label text-[12px] sm:text-[14px] text-[#ffffff] opacity-70 mb-[4px] sm:mb-[6px]">Standards</span>
          <span className="font-medium text-[13px] sm:text-[16px] md:text-[18px] text-[#ffffff] tracking-tight break-words">
            LICENSED &amp; INSURED
          </span>
        </div>

        {/* Cell 3 */}
        <div className="p-[16px] sm:p-[20px] md:p-[34px] flex flex-col justify-center text-left border-r border-[rgba(255,255,255,0.2)] lg:border-r-0">
          <span className="font-label text-[12px] sm:text-[14px] text-[#ffffff] opacity-70 mb-[4px] sm:mb-[6px]">Transparency</span>
          <span className="font-medium text-[13px] sm:text-[16px] md:text-[18px] text-[#ffffff] tracking-tight break-words">
            UPFRONT PRICING
          </span>
        </div>

        {/* Cell 4 with animated count-up for 4.8 and 137 */}
        <div className="p-[16px] sm:p-[20px] md:p-[34px] flex flex-col justify-center text-left">
          <span className="font-label text-[12px] sm:text-[14px] text-[#ffffff] opacity-70 mb-[4px] sm:mb-[6px]">Customer trust</span>
          <span className="font-medium text-[13px] sm:text-[16px] md:text-[18px] text-[#ffffff] tracking-tight flex flex-wrap items-baseline gap-[4px] sm:gap-[6px] break-words">
            <span>{rating} stars</span>
            <span className="text-[#ffffff] opacity-50">from</span>
            <span>{reviews}+ Google reviews</span>
          </span>
        </div>
      </div>
    </section>
  );
}
