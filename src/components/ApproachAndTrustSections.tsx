import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  DIFFERENTIATORS,
  FOUR_STEP_PROCESS,
  OFFICE_IMAGE,
  PUBLISHED_TRUST_CLAIMS,
  QUALITY_CONTROL_PILLARS,
} from '../data/spotlessData';
import { PageId } from '../types/navigation';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ApproachAndTrustProps {
  onRequestWalkthrough: () => void;
  onNavigate: (page: PageId) => void;
}

export const OperationsSupportSection: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => {
  const needs = [
    'Dependable cleaning schedules coordinated around business operations',
    'Consistent, familiar cleaning crews rather than rotating personnel',
    'Clear communication with responsive Oklahoma City management',
    'Customized facility plans tailored to actual rooms and traffic',
    'Ongoing quality-control inspections and periodic audits',
    'Minimal operational disruption during office or clinic hours',
  ];

  return (
    <section
      aria-labelledby="operations-heading"
      className="py-20 lg:py-28 bg-[#FAFBFA] border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-between py-2">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
              Commercial Facility Alignment
            </p>
            <h2
              id="operations-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
            >
              Clean Spaces. Smoother Operations.
            </h2>
            <p className="mt-5 text-base text-[#17262D]/80 leading-relaxed max-w-xl">
              Spotless Society works exclusively with commercial clients—never residential
              housekeeping—so every schedule, crew assignment, and inspection standard is built
              for active workplaces, clinics, and commercial properties.
            </p>

            <ul className="mt-8 divide-y divide-[#17262D]/10 border-t border-b border-[#17262D]/10">
              {needs.map((item) => (
                <li
                  key={item}
                  className="py-3.5 flex items-start gap-3 text-sm sm:text-base text-[#17262D]/90"
                >
                  <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('our-approach')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123C4A] hover:text-[#17262D] transition-colors cursor-pointer"
            >
              <span>Read About Our Operational Approach</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[480px] bg-[#E6EBEA]">
          <ArchitecturalImage
            src={OFFICE_IMAGE.src}
            alt={OFFICE_IMAGE.alt}
            caption="Corporate Office & Conference Facilities"
            className="w-full h-full object-cover lg:absolute lg:inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export const ConsistencyAndProcessSection: React.FC<ApproachAndTrustProps> = ({
  onRequestWalkthrough,
  onNavigate,
}) => {
  return (
    <section
      aria-labelledby="consistency-heading"
      className="py-20 lg:py-28 bg-[#E6EBEA]/55 border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Part 1: Consistency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#17262D]/12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
              Operational Standards
            </p>
            <h2
              id="consistency-heading"
              className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
            >
              Consistency Isn’t an Extra. It’s the Standard.
            </h2>
            <p className="mt-4 text-base text-[#17262D]/75 leading-relaxed">
              Commercial cleaning fails when teams rotate constantly or work without supervision.
              Our published operating practices keep expectations clear from day one.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onRequestWalkthrough}
                className="px-5 py-3 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Schedule an On-Site Walkthrough
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#17262D]/12 border-t border-b border-[#17262D]/12 bg-[#FAFBFA]">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6"
              >
                <div className="sm:col-span-5 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#6C8790] tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#17262D]">
                    {item.title}
                  </h3>
                </div>
                <p className="sm:col-span-7 text-sm text-[#17262D]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Four-Step Process Timeline */}
        <div className="pt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-2">
                Published Onboarding Workflow
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#17262D]">
                From First Walkthrough to Ongoing Quality Checks
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('our-approach')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123C4A] hover:text-[#17262D] transition-colors cursor-pointer"
            >
              <span>Full Process Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#17262D]/12 bg-[#FAFBFA] divide-y md:divide-y-0 md:divide-x divide-[#17262D]/12">
            {FOUR_STEP_PROCESS.map((item) => (
              <div key={item.step} className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#17262D]/10">
                    <span className="font-mono text-2xl font-medium text-[#123C4A] tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs text-[#6C8790]">Step {item.step}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#17262D]">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-sm text-[#17262D]/75 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustAndQualitySection: React.FC<ApproachAndTrustProps> = ({
  onRequestWalkthrough,
  onNavigate,
}) => {
  return (
    <section
      aria-labelledby="trust-heading"
      className="py-20 lg:py-28 bg-[#FAFBFA] border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
        {/* Trust & Published Business Claims */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#17262D]/12">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
                Published Business Commitments
              </p>
              <h2
                id="trust-heading"
                className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
              >
                Clear Standards Without Fabricated Claims.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <p className="text-sm sm:text-base text-[#17262D]/75 leading-relaxed">
                The commitments below reflect claims published directly by Spotless Society,
                rather than third-party audits or certifications. Insurance documentation and
                coverage details may be requested directly from the team.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#123C4A] hover:text-[#17262D] transition-colors cursor-pointer"
                >
                  <span>Request Insurance Details Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#17262D]/12 divide-y md:divide-y-0 md:divide-x divide-[#17262D]/12">
            {PUBLISHED_TRUST_CLAIMS.map((claim, idx) => (
              <div
                key={claim.title}
                className={`p-6 sm:p-8 ${
                  idx >= 3 ? 'md:border-t md:border-[#17262D]/12' : ''
                }`}
              >
                <div className="text-xs font-medium text-[#6C8790] mb-2">
                  Published Company Claim
                </div>
                <h3 className="font-display text-lg font-semibold text-[#17262D]">
                  {claim.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#17262D]/75 leading-relaxed">
                  {claim.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality-Control Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
              Quality-Control Framework
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]">
              Accountability Built Into Every Cleaning Plan.
            </h2>
            <p className="mt-4 text-base text-[#17262D]/75 leading-relaxed">
              Ongoing accountability relies on consistent human oversight—combining post-cleaning
              reviews, scheduled manager check-ins, and periodic on-site audits.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {QUALITY_CONTROL_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="p-5 bg-[#E6EBEA]/45 border border-[#17262D]/10"
                >
                  <div className="font-mono text-xs text-[#6C8790] tabular-nums mb-1.5">
                    {pillar.index}
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#17262D]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#17262D]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasteful Architectural Quality-Control Cycle Illustration */}
          <div className="lg:col-span-6 bg-[#17262D] text-[#FAFBFA] p-6 sm:p-10 border border-[#17262D]">
            <div className="flex items-center justify-between border-b border-[#FAFBFA]/12 pb-4 mb-6">
              <span className="font-display text-sm font-semibold">
                Continuous Oversight Loop
              </span>
              <span className="text-xs text-[#B8A185]">Published Practice Model</span>
            </div>

            <svg
              viewBox="0 0 460 300"
              className="w-full h-auto"
              role="img"
              aria-label="Diagram illustrating the four recurring stages of Spotless Society quality control: Post-Cleaning Inspections, Regular Client Check-Ins, Periodic Quality Audits, and Responsive Management"
            >
              {/* Architectural Grid Lines */}
              <line x1="230" y1="30" x2="230" y2="270" stroke="rgba(250,251,250,0.12)" strokeDasharray="3 3" />
              <line x1="40" y1="150" x2="420" y2="150" stroke="rgba(250,251,250,0.12)" strokeDasharray="3 3" />

              {/* Outer Architectural Loop Ring */}
              <rect
                x="78"
                y="48"
                width="304"
                height="204"
                fill="none"
                stroke="#6C8790"
                strokeWidth="1.25"
              />

              {/* Center Hub */}
              <rect x="165" y="122" width="130" height="56" fill="#123C4A" stroke="#B8A185" strokeWidth="1" />
              <text
                x="230"
                y="147"
                textAnchor="middle"
                fill="#FAFBFA"
                fontSize="11"
                fontWeight="600"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                Facility Plan
              </text>
              <text
                x="230"
                y="163"
                textAnchor="middle"
                fill="#E6EBEA"
                fontSize="9.5"
                fontFamily="DM Sans, sans-serif"
              >
                Consistent Crew
              </text>

              {/* Node 01 */}
              <rect x="18" y="26" width="178" height="52" fill="#17262D" stroke="rgba(250,251,250,0.28)" />
              <text x="32" y="48" fill="#B8A185" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                01
              </text>
              <text x="54" y="48" fill="#FAFBFA" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                Post-Cleaning Inspections
              </text>
              <text x="32" y="64" fill="#E6EBEA" fontSize="9.5" fontFamily="DM Sans, sans-serif">
                Immediate scope verification
              </text>

              {/* Node 02 */}
              <rect x="264" y="26" width="178" height="52" fill="#17262D" stroke="rgba(250,251,250,0.28)" />
              <text x="278" y="48" fill="#B8A185" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                02
              </text>
              <text x="300" y="48" fill="#FAFBFA" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                Regular Client Check-Ins
              </text>
              <text x="278" y="64" fill="#E6EBEA" fontSize="9.5" fontFamily="DM Sans, sans-serif">
                Direct manager feedback
              </text>

              {/* Node 03 */}
              <rect x="264" y="222" width="178" height="52" fill="#17262D" stroke="rgba(250,251,250,0.28)" />
              <text x="278" y="244" fill="#B8A185" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                03
              </text>
              <text x="300" y="244" fill="#FAFBFA" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                Periodic Quality Audits
              </text>
              <text x="278" y="260" fill="#E6EBEA" fontSize="9.5" fontFamily="DM Sans, sans-serif">
                Supervisory site reviews
              </text>

              {/* Node 04 */}
              <rect x="18" y="222" width="178" height="52" fill="#17262D" stroke="rgba(250,251,250,0.28)" />
              <text x="32" y="244" fill="#B8A185" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                04
              </text>
              <text x="54" y="244" fill="#FAFBFA" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
                Responsive Management
              </text>
              <text x="32" y="260" fill="#E6EBEA" fontSize="9.5" fontFamily="DM Sans, sans-serif">
                Prompt plan adjustments
              </text>
            </svg>

            <div className="mt-6 pt-5 border-t border-[#FAFBFA]/12 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#E6EBEA]/75">
                Walkthroughs define exact inspection focus areas for your facility.
              </span>
              <button
                type="button"
                onClick={onRequestWalkthrough}
                className="text-xs font-semibold text-[#B8A185] hover:text-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Free Walkthrough →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
