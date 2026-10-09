import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'arrival',
    question: 'How quickly can a plumber arrive during an emergency?',
    answer: 'Across Oakland and nearby East Bay communities, our service trucks are fully stocked for fast dispatch. For active emergencies such as burst pipes or flooding, call (510) 726-8100 immediately.',
  },
  {
    id: 'shutoff',
    question: 'What should I do immediately while waiting for dispatch?',
    answer: 'For active flooding or sudden pipe failures, immediately locate and turn off your main water shutoff valve. If you need assistance finding the valve, our dispatch team will guide you step-by-step over the phone.',
  },
  {
    id: 'pricing',
    question: 'How does your upfront pricing policy work?',
    answer: 'We evaluate the issue on-site and present a guaranteed fixed price before turning any wrench. You approve the quote first, with zero hidden travel surcharges or surprise billing.',
  },
  {
    id: 'coverage',
    question: 'Which towns and neighborhoods do you service?',
    answer: 'We provide 24/7 service across Oakland, Berkeley, Alameda and the wider Alameda County and East Bay. Call (510) 726-8100 any hour, day or night.',
  },
];

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>('arrival');

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] max-w-[1920px] mx-auto text-left overflow-hidden border-t border-[#e5e7eb] bg-[#ffffff]"
    >
      <div className="flex flex-col items-start text-left mb-[34px] md:mb-[48px]">
        {/* H2 with masked reveal */}
        <div className="overflow-hidden mb-[12px]">
          <motion.h2
            initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-h2 text-[#1a1a1a]"
          >
            Common questions.
          </motion.h2>
        </div>
        <p className="font-body text-[#767676] max-w-[560px] text-left">
          Direct, honest answers about our dispatch speed, pricing policies, and service standards.
        </p>
      </div>

      {/* Accordion / FAQ Cards */}
      <div className="flex flex-col gap-[16px] max-w-[960px] w-full">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] sm:p-[24px] text-left transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-[16px] text-left cursor-pointer focus:outline-none"
              >
                <span className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#1a1a1a] pr-[8px]">
                  {item.question}
                </span>
                <span className="w-[28px] h-[28px] rounded-full border border-[#e5e7eb] flex items-center justify-center shrink-0 text-[#1a1a1a]">
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="pt-[16px] mt-[16px] border-t border-[#e5e7eb] text-left">
                  <p className="font-body text-[#767676] text-[15px] sm:text-[16px] text-left leading-[1.6]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
