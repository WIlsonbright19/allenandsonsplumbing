export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="w-full border-t border-[#e5e7eb] bg-[#ffffff] pt-[48px] md:pt-[72px] pb-[34px] md:pb-[48px] px-[16px] sm:px-[20px] md:px-[48px]">
      <div className="max-w-[1920px] mx-auto flex flex-col text-left">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[34px] md:gap-[48px] text-left items-start">
          {/* Column 1: Brand & License (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-medium text-[20px] sm:text-[24px] text-[#1a1a1a] tracking-tight mb-[12px] break-words">
              Allen &amp; Sons Plumbing
            </span>
            <p className="font-body text-[#767676] text-[15px] sm:text-[16px] max-w-[420px] mb-[12px] text-left">
              Family-owned emergency plumbing, drain cleaning, water heaters and sewer lines across Oakland and the East Bay.
            </p>
            <p className="font-label text-[13px] text-[#767676] mb-[16px] text-left">
              7645 MacArthur Blvd, Oakland, CA 94605
            </p>
            <div className="bg-[#f4f4f4] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[8px] flex items-center gap-[8px]">
              <span className="font-label text-[13px] text-[#1a1a1a]">
                Licensed &amp; Insured
              </span>
              <span className="text-[#e5e7eb]">&bull;</span>
              <span className="font-label text-[13px] text-[#767676]">
                Bonded Plumber
              </span>
            </div>
          </div>

          {/* Column 2: Services Quick Links (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <span className="font-label text-[13px] text-[#767676] mb-[16px] text-left">
              Services
            </span>
            <nav aria-label="Footer services navigation" className="flex flex-col gap-[10px] text-left">
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Emergency plumbing
              </a>
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Drain cleaning
              </a>
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Water heaters
              </a>
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Sewer line repair
              </a>
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Burst pipe repair
              </a>
              <a href="#services" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Fixtures
              </a>
            </nav>
          </div>

          {/* Column 3: Navigation Links (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <span className="font-label text-[13px] text-[#767676] mb-[16px] text-left">
              Company
            </span>
            <nav aria-label="Footer company navigation" className="flex flex-col gap-[10px] text-left">
              <a href="#process" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                How it works
              </a>
              <a href="#standards" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Our standards
              </a>
              <a href="#faq" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Common questions
              </a>
              <a href="#areas" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Where we work
              </a>
              <a href="#quote" className="font-label text-[14px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors text-left">
                Get a free quote
              </a>
            </nav>
          </div>

          {/* Column 4: 24/7 Dispatch & Phone (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <span className="font-label text-[13px] text-[#767676] mb-[16px] text-left">
              24/7 Dispatch
            </span>
            <a
              href="tel:+15107268100"
              className="font-medium text-[20px] sm:text-[22px] text-[#1a1a1a] hover:text-[#0000ee] transition-colors mb-[10px] break-words text-left"
            >
              (510) 726-8100
            </a>
            <div className="flex items-center gap-[6px] mb-[12px] text-left">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000ee] opacity-75 duration-1000" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000ee]" />
              </span>
              <span className="font-label text-[13px] text-[#1a1a1a]">
                Open 24/7 &bull; Fast dispatch
              </span>
            </div>
            <p className="font-label text-[13px] text-[#767676] leading-[1.6] text-left">
              Serving Oakland, Berkeley, Alameda and Alameda County
            </p>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-[#e5e7eb] my-[34px] md:my-[48px]" />

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] text-left">
          <span className="font-label text-[13px] text-[#767676] text-left">
            &copy; 2026 Allen &amp; Sons Plumbing. All rights reserved.
          </span>

          <div className="flex items-center gap-[20px]">
            <a href="#quote" className="font-label text-[13px] text-[#767676] hover:text-[#1a1a1a] transition-colors">
              Request service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="font-label text-[13px] text-[#767676] hover:text-[#1a1a1a] transition-colors cursor-pointer flex items-center gap-[4px]"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
