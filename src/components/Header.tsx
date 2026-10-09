import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close drawer on desktop resize (1024px+)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close drawer on Escape key and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-[12px] sm:top-[20px] left-[12px] sm:left-[20px] right-[12px] sm:right-[20px] z-40 flex items-center justify-between"
      >
        {/* Floating Pill Bar */}
        <div className="w-full bg-[#ffffff] border border-[#e5e7eb] rounded-[40px] px-[16px] sm:px-[20px] md:px-[34px] py-[10px] sm:py-[12px] flex items-center justify-between gap-[12px]">
          {/* Wordmark */}
          <a
            href="#"
            onClick={closeDrawer}
            className="font-medium text-[15px] sm:text-[16px] md:text-[18px] text-[#1a1a1a] tracking-tight hover:text-[#767676] transition-colors truncate max-w-[170px] xs:max-w-[210px] sm:max-w-none shrink"
          >
            Allen &amp; Sons Plumbing
          </a>

          {/* Desktop Navigation Links (>= 1024px) */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-[28px]">
            <a
              href="#services"
              className="font-label text-[14px] text-[#1a1a1a] hover:text-[#767676] transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="font-label text-[14px] text-[#1a1a1a] hover:text-[#767676] transition-colors"
            >
              Process
            </a>
            <a
              href="#standards"
              className="font-label text-[14px] text-[#1a1a1a] hover:text-[#767676] transition-colors"
            >
              Standards
            </a>
            <a
              href="#faq"
              className="font-label text-[14px] text-[#1a1a1a] hover:text-[#767676] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#areas"
              className="font-label text-[14px] text-[#1a1a1a] hover:text-[#767676] transition-colors"
            >
              Areas
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-[8px] sm:gap-[12px] shrink-0">
            {/* Quick Call Pill Button */}
            <a
              href="tel:+15107268100"
              className="inline-flex items-center justify-center bg-[#1a1a1a] text-[#ffffff] border border-[#1a1a1a] rounded-[40px] px-[14px] sm:px-[20px] py-[8px] sm:py-[12px] font-medium text-[13px] sm:text-[14px] leading-none hover:bg-transparent hover:text-[#1a1a1a] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Call now
            </a>

            {/* Mobile/Tablet Hamburger Trigger Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open navigation drawer"
              className="lg:hidden w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full border border-[#e5e7eb] bg-[#ffffff] flex flex-col items-center justify-center gap-[5px] text-[#1a1a1a] hover:bg-[#f4f4f4] transition-colors cursor-pointer"
            >
              <span className="block w-[18px] h-[1.5px] bg-[#1a1a1a]" />
              <span className="block w-[18px] h-[1.5px] bg-[#1a1a1a]" />
              <span className="block w-[18px] h-[1.5px] bg-[#1a1a1a]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Slide-in Drawer & Backdrop for Mobile/Tablet (< 1024px) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Flat #1a1a1a backdrop at 50% opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              className="absolute inset-0 bg-[#1a1a1a]"
              aria-hidden="true"
            />

            {/* Slide-in Drawer Container */}
            <motion.aside
              id="mobile-navigation-drawer"
              aria-label="Mobile navigation menu"
              initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[300px] xs:w-[340px] max-w-[85vw] h-full bg-[#ffffff] border-l border-[#e5e7eb] p-[20px] sm:p-[28px] flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Row: Wordmark & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-[20px] border-b border-[#e5e7eb] mb-[20px]">
                  <span className="font-medium text-[16px] text-[#1a1a1a] tracking-tight">
                    Allen &amp; Sons Plumbing
                  </span>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    aria-label="Close navigation drawer"
                    className="w-[36px] h-[36px] rounded-full border border-[#e5e7eb] bg-[#ffffff] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f4f4f4] transition-colors cursor-pointer"
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

                {/* Vertical Navigation Links */}
                <nav className="flex flex-col gap-[16px] text-left">
                  <a
                    href="#services"
                    onClick={closeDrawer}
                    className="font-medium text-[17px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors py-[4px] text-left"
                  >
                    Services
                  </a>
                  <a
                    href="#process"
                    onClick={closeDrawer}
                    className="font-medium text-[17px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors py-[4px] text-left"
                  >
                    Process
                  </a>
                  <a
                    href="#standards"
                    onClick={closeDrawer}
                    className="font-medium text-[17px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors py-[4px] text-left"
                  >
                    Standards
                  </a>
                  <a
                    href="#faq"
                    onClick={closeDrawer}
                    className="font-medium text-[17px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors py-[4px] text-left"
                  >
                    FAQ
                  </a>
                  <a
                    href="#areas"
                    onClick={closeDrawer}
                    className="font-medium text-[17px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors py-[4px] text-left"
                  >
                    Areas
                  </a>
                </nav>
              </div>

              {/* Drawer Bottom Actions & Business Details */}
              <div className="pt-[20px] border-t border-[#e5e7eb] flex flex-col gap-[12px] text-left">
                <div className="flex flex-col mb-[8px] text-left">
                  <span className="font-label text-[12px] text-[#767676] text-left">
                    24/7 Dispatch &bull; Licensed &amp; Insured
                  </span>
                  <span className="font-label text-[12px] text-[#767676] text-left">
                    Serving Oakland &amp; the East Bay
                  </span>
                </div>

                <a
                  href="tel:+15107268100"
                  onClick={closeDrawer}
                  className="btn-primary-light w-full justify-start text-left py-[14px]"
                >
                  Call now
                </a>
                <a
                  href="#quote"
                  onClick={closeDrawer}
                  className="btn-secondary-light w-full justify-start text-left py-[14px]"
                >
                  Request quote
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
