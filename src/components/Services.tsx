import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../images.ts';
import { SafeImage } from './SafeImage.tsx';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: (typeof IMAGES)[keyof typeof IMAGES];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'emergency',
    name: 'Emergency plumbing',
    description: 'Burst pipes and overnight leaks. Call any hour, any day.',
    image: IMAGES.serviceEmergency,
  },
  {
    id: 'drain',
    name: 'Drain cleaning',
    description: 'Clogged sinks, showers and main lines cleared fast.',
    image: IMAGES.serviceDrain,
  },
  {
    id: 'heater',
    name: 'Water heaters',
    description: 'Repair and replacement for failing or aging water heaters.',
    image: IMAGES.serviceHeater,
  },
  {
    id: 'sewer',
    name: 'Sewer line repair',
    description: 'Sewer line service for chronic backups and slow drains.',
    image: IMAGES.serviceLeak,
  },
  {
    id: 'burst-pipe',
    name: 'Burst pipe & leak repair',
    description: 'Fast repair to stop the damage and restore water.',
    image: IMAGES.serviceRepipe,
  },
  {
    id: 'fixtures',
    name: 'Fixtures & installations',
    description: 'Faucets, toilets and fixtures installed or replaced properly.',
    image: IMAGES.serviceFixtures,
  },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleServiceClick = (serviceName: string) => {
    onSelectService(serviceName);
    const target = document.getElementById('quote');
    if (target) {
      target.scrollIntoView();
    }
  };

  return (
    <section
      id="services"
      className="w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] max-w-[1920px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-[48px] items-start">
        {/* LEFT column (40%): sticky on desktop, static on mobile */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px] flex flex-col items-start text-left">
          {/* Masked H2 reveal */}
          <div className="overflow-hidden mb-[20px]">
            <motion.h2
              initial={shouldReduceMotion ? { y: 0 } : { y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-h2 text-[#1a1a1a]"
            >
              What we fix.
            </motion.h2>
          </div>

          <p className="font-body text-[#767676] max-w-[420px] mb-[34px] text-left">
            Clear upfront quotes before any work begins.
          </p>

          <a
            href="#quote"
            className="btn-secondary-light"
          >
            Get a free quote
          </a>
        </div>

        {/* RIGHT column (60%): 6 stacked large image cards */}
        <div className="w-full lg:w-[60%] flex flex-col gap-[34px]">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] flex flex-col text-left"
            >
              {/* 16:10 Photo with clip-path wipe reveal */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-[8px] mb-[20px] bg-[#f4f4f4]">
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { clipPath: 'inset(0% 0% 0% 0%)' }
                      : { clipPath: 'inset(100% 0% 0% 0%)' }
                  }
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <SafeImage
                    image={service.image}
                    className="w-full h-full object-cover"
                    rounded={true}
                  />
                </motion.div>
              </div>

              {/* Service title H3 */}
              <h3 className="font-h3 text-[#1a1a1a] mb-[12px] text-left">
                {service.name}
              </h3>

              {/* One-line description (max 12 words) BELOW the photo */}
              <p className="font-body text-[#767676] text-[16px] mb-[20px] text-left">
                {service.description}
              </p>

              {/* Hairline */}
              <div className="w-full h-[1px] bg-[#e5e7eb] mb-[20px]" />

              {/* Text link "Request this service" that scrolls to the form with that service preselected */}
              <button
                type="button"
                onClick={() => handleServiceClick(service.name)}
                className="font-medium text-[16px] text-[#0000ee] hover:underline flex items-center gap-[8px] text-left cursor-pointer w-fit"
              >
                <span>Request this service</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
