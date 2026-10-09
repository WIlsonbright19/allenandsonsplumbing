/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { Services } from './components/Services.tsx';
import { PhotoBand } from './components/PhotoBand.tsx';
import { Process } from './components/Process.tsx';
import { Standards } from './components/Standards.tsx';
import { Reviews } from './components/Reviews.tsx';
import { RecentWork } from './components/RecentWork.tsx';
import { FAQ } from './components/FAQ.tsx';
import { ServiceArea } from './components/ServiceArea.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyCallBar } from './components/StickyCallBar.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('Emergency plumbing');

  return (
    <div className="w-full min-h-screen bg-[#ffffff] text-[#1a1a1a] flex flex-col font-normal antialiased selection:bg-[#1a1a1a] selection:text-[#ffffff]">
      {/* 1. Floating Header with Slide-in Drawer */}
      <Header />

      <main className="flex-1 w-full flex flex-col">
        {/* 2. Full-Screen Hero (100svh) */}
        <Hero
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Services, Sticky Split */}
        <Services onSelectService={setSelectedService} />

        {/* 5. Full-Bleed Photo Band */}
        <PhotoBand />

        {/* 6. Process, Vertical Timeline */}
        <Process />

        {/* 7. Our Standards */}
        <Standards />

        {/* 8. Reviews, Featured */}
        <Reviews />

        {/* 9. Recent Work */}
        <RecentWork />

        {/* 10. Common Questions (FAQ) */}
        <FAQ />

        {/* 11. Service Area, Flowing Text */}
        <ServiceArea />

        {/* 12. Final CTA, 50/50 Split */}
        <FinalCTA
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Call Bar */}
      <StickyCallBar />
    </div>
  );
}
