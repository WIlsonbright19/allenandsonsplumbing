export interface ImageConfig {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export const IMAGES: Record<string, ImageConfig> = {
  hero: {
    id: 'hero',
    src: './images/1581578731548-c64695cc6952.jpg',
    alt: 'Professional plumber working on residential plumbing system',
    width: 1920,
    height: 1080,
    objectPosition: 'center 40%',
  },
  // Services (6 cards)
  serviceEmergency: {
    id: 'service-emergency',
    src: './images/1621905251189-08b45d6a269e.jpg',
    alt: 'Emergency pipe repair and rapid diagnostic work',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  serviceLeak: {
    id: 'service-leak',
    src: './images/1504148455328-c376907d081c.jpg',
    alt: 'Plumbing leak detection on domestic water lines',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  serviceDrain: {
    id: 'service-drain',
    src: './images/1584622650111-993a426fbf0a.jpg',
    alt: 'Kitchen drain inspection and cleaning',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  serviceHeater: {
    id: 'service-heater',
    src: './images/1585704032915-c3400ca199e7.jpg',
    alt: 'Modern water heater installation and valve check',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  serviceFixtures: {
    id: 'service-fixtures',
    src: './images/1584622781564-1d987f7333c1.jpg',
    alt: 'Modern bathroom fixture and chrome faucet installation',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  serviceRepipe: {
    id: 'service-repipe',
    src: './images/1607472586893-edb57bdc0e39.jpg',
    alt: 'Precision copper pipe repair and repiping assembly',
    width: 1280,
    height: 800,
    objectPosition: 'center',
  },
  // Photo Band (Full-bleed)
  photoBand: {
    id: 'photo-band',
    src: './images/1552321554-5fefe8c9ef14.jpg',
    alt: 'Architectural modern bathroom with clean plumbing finishes',
    width: 2100,
    height: 900,
    objectPosition: 'center 45%',
  },
  // Process Background & Steps (3 steps)
  processBg: {
    id: 'process-bg',
    src: './images/1507089947368-19c1da9775ae.jpg',
    alt: '',
    width: 1920,
    height: 1080,
    objectPosition: 'center',
  },
  processStep1: {
    id: 'process-step-1',
    src: './images/1521791136064-7986c2920216.jpg',
    alt: 'Direct customer communication and dispatch coordination',
    width: 800,
    height: 600,
    objectPosition: 'center',
  },
  processStep2: {
    id: 'process-step-2',
    src: './images/1581092921461-eab62e97a780.jpg',
    alt: 'On-site technical evaluation and upfront quote review',
    width: 800,
    height: 600,
    objectPosition: 'center',
  },
  processStep3: {
    id: 'process-step-3',
    src: './images/1584622650111-993a426fbf0a.jpg',
    alt: 'Complete, tested repair with clean workspace',
    width: 800,
    height: 600,
    objectPosition: 'center',
  },
  // Recent Work (5 photos)
  work1: {
    id: 'work-1',
    src: './images/1584622781564-1d987f7333c1.jpg',
    alt: 'Completed master bath plumbing fixture overhaul',
    width: 1200,
    height: 900,
    objectPosition: 'center',
  },
  work2: {
    id: 'work-2',
    src: './images/1607472586893-edb57bdc0e39.jpg',
    alt: 'Basement copper manifold water line rebuild',
    width: 800,
    height: 600,
    objectPosition: 'center',
  },
  work3: {
    id: 'work-3',
    src: './images/1585704032915-c3400ca199e7.jpg',
    alt: 'Tankless water heater installation with expansion tank',
    width: 800,
    height: 700,
    objectPosition: 'center',
  },
  work4: {
    id: 'work-4',
    src: './images/1507089947368-19c1da9775ae.jpg',
    alt: 'Undermount kitchen sink and commercial faucet line install',
    width: 800,
    height: 600,
    objectPosition: 'center',
  },
  work5: {
    id: 'work-5',
    src: './images/1620626011761-996317b8d101.jpg',
    alt: 'Compact powder room rough-in and toilet install',
    width: 800,
    height: 700,
    objectPosition: 'center',
  },
  // Final CTA left panel
  ctaPhoneBg: {
    id: 'cta-phone-bg',
    src: './images/1581578731548-c64695cc6952.jpg',
    alt: 'Plumbing technician ready for 24/7 service dispatch',
    width: 1200,
    height: 1200,
    objectPosition: 'center',
  },
};
