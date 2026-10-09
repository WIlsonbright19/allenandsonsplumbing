export function Reviews() {
  return (
    <section className="w-full py-[72px] md:py-[120px] px-[16px] sm:px-[20px] md:px-[48px] max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] md:gap-[34px] items-stretch">
        {/* Large featured review (2/3 width on desktop = 8 cols) */}
        <div className="lg:col-span-8 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] sm:p-[20px] md:p-[34px] flex flex-col justify-between text-left">
          <div>
            {/* Text-star row */}
            <div className="text-[#1a1a1a] text-[18px] tracking-[4px] mb-[20px] select-none text-left" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            {/* Quote in H3 size */}
            <blockquote className="font-h3 text-[#1a1a1a] mb-[20px] sm:mb-[34px] text-left break-words">
              &ldquo;Cory and his crew did fantastic work on our addition, connecting our new sewer line and underground water lines. Upfront pricing and cleaned up completely.&rdquo;
            </blockquote>
          </div>
          <div className="font-label text-[14px] text-[#767676] text-left break-words">
            Norah W., Oakland
          </div>
        </div>

        {/* Two small bordered review cards stacked in remaining 1/3 = 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-[20px] justify-between">
          <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] flex flex-col justify-between h-full text-left">
            <div>
              <div className="text-[#1a1a1a] text-[14px] tracking-[3px] mb-[12px] select-none text-left" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="font-body text-[#1a1a1a] text-[15px] sm:text-[16px] mb-[20px] text-left break-words">
                &ldquo;Cory did a fantastic job with our slow floor drain. He quickly diagnosed the old pump issue and had everything running smoothly the same afternoon.&rdquo;
              </p>
            </div>
            <div className="font-label text-[14px] text-[#767676] text-left break-words">
              Becky M., Berkeley
            </div>
          </div>

          <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] flex flex-col justify-between h-full text-left">
            <div>
              <div className="text-[#1a1a1a] text-[14px] tracking-[3px] mb-[12px] select-none text-left" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="font-body text-[#1a1a1a] text-[15px] sm:text-[16px] mb-[20px] text-left break-words">
                &ldquo;We moved into an older Oakland home with multiple plumbing issues. Roman walked us through the options, gave a clear estimate, and solved every leak.&rdquo;
              </p>
            </div>
            <div className="font-label text-[14px] text-[#767676] text-left break-words">
              Ruby S., Alameda
            </div>
          </div>
        </div>
      </div>

      {/* Below: one underlined link "Read more reviews on Google" */}
      <div className="mt-[34px] text-left">
        <a
          href="https://maps.google.com/?cid=1764127034643314596&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[15px] sm:text-[16px] text-[#0000ee] underline hover:opacity-80 transition-opacity break-words"
        >
          Read more reviews on Google
        </a>
      </div>
    </section>
  );
}
