import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { INDUSTRIES } from '../data/spotlessData';
import { PageId, WalkthroughPrefill } from '../types/navigation';
import { ArchitecturalImage } from './ArchitecturalImage';

interface IndustriesSectionProps {
  onDiscussFacility: (prefill: WalkthroughPrefill) => void;
  onViewService: (page: PageId) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onDiscussFacility,
  onViewService,
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);
  const selectedIndustry =
    INDUSTRIES.find((item) => item.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <section
      id="industries-section"
      aria-labelledby="industries-heading"
      className="py-20 lg:py-28 bg-[#17262D] text-[#FAFBFA]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#FAFBFA]/12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#B8A185] mb-3">
              Industries We Serve · Commercial Environments Only
            </p>
            <h2
              id="industries-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.12] [text-wrap:balance]"
            >
              Built Around the Operational Rhythm of Your Facility.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#E6EBEA]/80 leading-relaxed">
              Select a commercial property category to review typical cleaning priorities,
              scheduling windows, and recommended service structure.
            </p>
          </div>
        </div>

        {/* Interactive 9-Industry Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Commercial industries">
          {INDUSTRIES.map((industry) => {
            const active = industry.id === selectedIndustry.id;
            return (
              <button
                key={industry.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedIndustryId(industry.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                  active
                    ? 'bg-[#FAFBFA] text-[#17262D] border-[#FAFBFA]'
                    : 'bg-transparent text-[#E6EBEA]/85 border-[#FAFBFA]/18 hover:border-[#FAFBFA]/45 hover:text-[#FAFBFA]'
                }`}
              >
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 border border-[#FAFBFA]/12 bg-[#123C4A]/35 items-stretch">
          <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[420px] bg-[#123C4A]">
            <ArchitecturalImage
              src={selectedIndustry.image}
              alt={selectedIndustry.imageAlt}
              caption={selectedIndustry.name}
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8A185] mb-3">
                <span>Commercial Environment</span>
                <span aria-hidden="true">·</span>
                <span>{selectedIndustry.typicalCadence}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFBFA]">
                {selectedIndustry.name}
              </h3>
              <p className="mt-3 text-base text-[#E6EBEA]/85 leading-relaxed">
                {selectedIndustry.summary}
              </p>

              <div className="mt-7 pt-6 border-t border-[#FAFBFA]/12">
                <div className="text-xs font-medium tracking-wide text-[#B8A185] mb-4">
                  Primary Facility Focus Areas
                </div>
                <ul className="space-y-2.5">
                  {selectedIndustry.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-[#E6EBEA]/90"
                    >
                      <Check className="w-4 h-4 text-[#B8A185] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedIndustry.note && (
                <p className="mt-5 text-xs text-[#E6EBEA]/70 leading-relaxed border-t border-[#FAFBFA]/12 pt-4">
                  {selectedIndustry.note}
                </p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#FAFBFA]/12 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onViewService(selectedIndustry.recommendedServiceId)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E6EBEA] hover:text-[#B8A185] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore {selectedIndustry.recommendedServiceName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  onDiscussFacility({
                    facilityType: selectedIndustry.name,
                    serviceNeeded: selectedIndustry.recommendedServiceName,
                  })
                }
                className="px-6 py-3 bg-[#B8A185] text-[#17262D] text-sm font-semibold hover:bg-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Discuss Your Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
