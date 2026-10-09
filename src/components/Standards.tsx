import { motion, useReducedMotion } from 'motion/react';

interface StandardItem {
  number: string;
  title: string;
  description: string;
}

const STANDARDS_DATA: StandardItem[] = [
  {
    number: '01',
    title: 'Fixed upfront pricing',
    description: 'You approve the exact price before any tool touches a pipe. No diagnostic surprises, travel markups, or hourly guessing.',
  },
  {
    number: '02',
    title: 'Licensed & code-compliant',
    description: 'Every pipe repair and fixture installation is performed by licensed professionals strictly complying with California and East Bay plumbing codes.',
  },
  {
    number: '03',
    title: 'Clean home pledge',
    description: 'Protective floor coverings and boot covers on every visit. We pressure test the repair and leave your home completely spotless.',
  },
];

export function Standards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="standards"
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
            Our standards.
          </motion.h2>
        </div>
        <p className="font-body text-[#767676] max-w-[560px] text-left">
          Consistent, reliable commitments for every homeowner across Oakland and the East Bay.
        </p>
      </div>

      {/* 3 Bordered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[34px] items-stretch">
        {STANDARDS_DATA.map((item) => (
          <div
            key={item.number}
            className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] sm:p-[24px] flex flex-col justify-between text-left"
          >
            <div>
              <span className="font-label text-[14px] text-[#767676] block mb-[16px]">
                {item.number}
              </span>
              <h3 className="font-h3 text-[#1a1a1a] mb-[12px] text-left">
                {item.title}
              </h3>
              <p className="font-body text-[#767676] text-[15px] sm:text-[16px] text-left">
                {item.description}
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#e5e7eb] mt-[24px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
