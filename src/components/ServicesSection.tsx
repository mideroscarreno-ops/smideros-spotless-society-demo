import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/spotlessData';
import { PageId, ServiceItem, WalkthroughPrefill } from '../types/navigation';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ServicesSectionProps {
  onSelectServicePage: (page: PageId) => void;
  onRequestWalkthrough: (prefill?: WalkthroughPrefill) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServicePage,
  onRequestWalkthrough,
}) => {
  const [activeId, setActiveId] = useState<ServiceItem['id']>('commercial-cleaning');
  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-[#FAFBFA] border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#17262D]/12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
              Commercial Service Portfolio · Six Core Disciplines
            </p>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
            >
              Dedicated Commercial Cleaning Across Six Facility Specialties.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#17262D]/75 leading-relaxed">
              Every service is engineered exclusively for business and commercial properties in
              the Oklahoma City metro—never residential housekeeping. Select a discipline to
              inspect its scope or open its full service overview.
            </p>
          </div>
        </div>

        {/* Interactive Architectural Service Panel */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Navigation Rail */}
          <div
            role="tablist"
            aria-label="Commercial cleaning services"
            className="lg:col-span-5 flex flex-col divide-y divide-[#17262D]/10 border-t border-b border-[#17262D]/10"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(service.id)}
                  className={`group text-left py-5 px-4 sm:px-5 transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#123C4A] text-[#FAFBFA]'
                      : 'bg-transparent text-[#17262D] hover:bg-[#E6EBEA]/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs tabular-nums mt-1 ${
                        isSelected ? 'text-[#B8A185]' : 'text-[#6C8790]'
                      }`}
                    >
                      {service.index}
                    </span>
                    <div>
                      <div className="font-display text-lg font-semibold tracking-tight">
                        {service.title}
                      </div>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          isSelected ? 'text-[#E6EBEA]/85' : 'text-[#17262D]/70'
                        }`}
                      >
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1.5 transition-transform duration-150 ${
                      isSelected
                        ? 'text-[#B8A185] translate-x-0.5'
                        : 'text-[#6C8790] group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Spotlight Panel */}
          <div className="lg:col-span-7 bg-[#E6EBEA]/45 border border-[#17262D]/12 flex flex-col justify-between">
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#17262D]">
                <ArchitecturalImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  caption={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6C8790] mb-3">
                  <span className="font-mono tabular-nums">{activeService.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeService.idealFor}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#17262D] [text-wrap:balance]">
                  {activeService.title}
                </h3>
                <p className="mt-3 text-base text-[#17262D]/80 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="mt-7 pt-6 border-t border-[#17262D]/10">
                  <h4 className="text-xs font-semibold tracking-wide text-[#123C4A] mb-4">
                    Typical Scope Focus
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {activeService.scopeHighlights.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#17262D]/85 leading-snug"
                      >
                        <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeService.clarificationNote && (
                  <p className="mt-5 text-xs text-[#17262D]/70 leading-relaxed border-t border-[#17262D]/10 pt-4">
                    {activeService.clarificationNote}
                  </p>
                )}
              </div>
            </div>

            <div className="px-6 sm:px-8 lg:px-10 py-5 bg-[#FAFBFA] border-t border-[#17262D]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onSelectServicePage(activeService.id)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123C4A] hover:text-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View {activeService.title} Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onRequestWalkthrough({
                    serviceNeeded: activeService.title,
                    facilityType: activeService.idealFor.split(',')[0],
                  })
                }
                className="px-5 py-2.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Walkthrough for {activeService.shortLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
