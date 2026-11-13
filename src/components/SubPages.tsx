import React from 'react';
import { ArrowLeft, ArrowRight, Check, Clock, Mail, MapPin, Phone } from 'lucide-react';
import {
  BUSINESS_INFO,
  HERO_IMAGE,
  OFFICE_IMAGE,
  PUBLISHED_TRUST_CLAIMS,
  SERVICES,
} from '../data/spotlessData';
import { PageId, ServiceItem, WalkthroughPrefill } from '../types/navigation';
import { ArchitecturalImage } from './ArchitecturalImage';
import {
  ConsistencyAndProcessSection,
  TrustAndQualitySection,
} from './ApproachAndTrustSections';
import { FaqSection } from './FaqSection';
import { IndustriesSection } from './IndustriesSection';
import { ServiceAreasSection } from './ServiceAreasSection';
import { WalkthroughForm } from './WalkthroughForm';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
  onBackHome: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  onBackHome,
}) => (
  <section className="bg-[#17262D] text-[#FAFBFA] border-b border-[#FAFBFA]/12 py-14 sm:py-20">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
      <button
        type="button"
        onClick={onBackHome}
        className="inline-flex items-center gap-2 text-xs font-medium text-[#B8A185] hover:text-[#FAFBFA] transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Overview</span>
      </button>
      <p className="text-xs font-medium tracking-wide text-[#B8A185] mb-3">{kicker}</p>
      <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl [text-wrap:balance]">
        {title}
      </h1>
      <p className="mt-4 text-base sm:text-lg text-[#E6EBEA]/80 leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    </div>
  </section>
);

export const ServiceDetailPage: React.FC<{
  service: ServiceItem;
  onNavigate: (page: PageId) => void;
  onRequestWalkthrough: (prefill?: WalkthroughPrefill) => void;
}> = ({ service, onNavigate, onRequestWalkthrough }) => {
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-[#17262D] text-[#FAFBFA] border-b border-[#FAFBFA]/12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#B8A185] hover:text-[#FAFBFA] transition-colors mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Commercial Services</span>
            </button>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8A185] mb-3">
              <span className="font-mono tabular-nums">Service {service.index}</span>
              <span aria-hidden="true">·</span>
              <span>Exclusively Commercial</span>
              <span aria-hidden="true">·</span>
              <span>Oklahoma City Metro</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08] [text-wrap:balance]">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-[#E6EBEA]/90 font-medium leading-snug">
              {service.heroStatement}
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#E6EBEA]/75 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  onRequestWalkthrough({
                    serviceNeeded: service.title,
                    facilityType: service.idealFor.split(',')[0],
                  })
                }
                className="px-6 py-3.5 bg-[#B8A185] text-[#17262D] text-sm font-semibold hover:bg-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Free Walkthrough
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#FAFBFA]/25 text-[#FAFBFA] text-sm font-medium hover:bg-[#FAFBFA]/10 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#B8A185]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-[#FAFBFA]/15 bg-[#123C4A]">
              <ArchitecturalImage
                src={service.image}
                alt={service.imageAlt}
                caption={service.title}
                priority
                width={1200}
                height={896}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope & Benefits Split */}
      <section className="py-16 sm:py-24 bg-[#FAFBFA] border-b border-[#17262D]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 p-6 sm:p-10 bg-[#E6EBEA]/45 border border-[#17262D]/12">
            <p className="text-xs font-medium text-[#6C8790] mb-2">Included Focus Areas</p>
            <h2 className="font-display text-2xl font-semibold text-[#17262D] mb-6">
              Typical {service.title} Scope
            </h2>
            <ul className="space-y-4">
              {service.scopeHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#17262D]/85"
                >
                  <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 bg-white border border-[#17262D]/12 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#6C8790] mb-2">
                Operational Reliability
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#17262D] mb-6">
                How Spotless Society Executes This Plan
              </h2>
              <ul className="space-y-4">
                {service.operationalBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#17262D]/85"
                  >
                    <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#17262D]/10 space-y-3">
              <div className="text-xs font-semibold text-[#123C4A]">
                Scheduling &amp; Positioning
              </div>
              <p className="text-sm text-[#17262D]/80 leading-relaxed">
                {service.schedulingNote}
              </p>
              {service.clarificationNote && (
                <p className="text-xs text-[#6C8790] leading-relaxed">
                  {service.clarificationNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Commercial Services Switcher */}
      <section className="py-16 bg-[#E6EBEA]/55">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-2xl font-semibold text-[#17262D] mb-6">
            Explore Other Commercial Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onNavigate(other.id)}
                className="p-5 bg-[#FAFBFA] border border-[#17262D]/12 hover:border-[#123C4A] text-left transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#6C8790] tabular-nums">
                    {other.index}
                  </span>
                  <div className="font-display text-base font-semibold text-[#17262D] mt-1">
                    {other.title}
                  </div>
                  <p className="text-xs text-[#17262D]/70 mt-1.5 leading-relaxed">
                    {other.summary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#123C4A]">
                  <span>View Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const AboutPage: React.FC<{
  onRequestWalkthrough: () => void;
  onNavigate: (page: PageId) => void;
}> = ({ onRequestWalkthrough, onNavigate }) => {
  const pillars = [
    {
      index: '01',
      title: 'Exclusively Commercial Focus',
      body: 'Spotless Society serves businesses, clinics, offices, retail storefronts, multi-tenant properties, and commercial common areas across the Oklahoma City metro. We do not offer residential maid services or house cleaning—every system, supply kit, and crew workflow is built for commercial facilities.',
    },
    {
      index: '02',
      title: 'Local Oklahoma City Presence',
      body: 'Locally owned and operated in Oklahoma City, our team works directly with regional property managers, practice administrators, and business owners within approximately 30 driving miles of the metro.',
    },
    {
      index: '03',
      title: 'Consistent Cleaning Crews',
      body: 'Businesses rely on familiarity and accountability. Rather than constantly rotating crews, Spotless Society assigns consistent, background-checked, uniformed teams who learn your building layout and security expectations.',
    },
    {
      index: '04',
      title: 'Custom Cleaning Plans & Clear Communication',
      body: 'No two commercial properties share identical foot traffic or priorities. Every engagement begins with an on-site walkthrough and continues with direct communication, post-cleaning checks, and periodic quality audits.',
    },
    {
      index: '05',
      title: 'Long-Term Service Philosophy',
      body: 'Our focus is dependable, ongoing stewardship of your workspace—reducing operational friction for facility teams so your staff and visitors walk into a consistently prepared building.',
    },
  ];

  return (
    <div>
      <PageHeader
        kicker="About Spotless Society · Oklahoma City, Oklahoma"
        title="Exclusively Commercial Cleaning Built on Local Accountability."
        subtitle="Locally owned in Oklahoma City, Spotless Society partners with commercial organizations that require dependable crews, customized facility plans, and consistent quality control."
        onBackHome={() => onNavigate('home')}
      />

      <section className="py-16 sm:py-24 bg-[#FAFBFA] border-b border-[#17262D]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-[#17262D]/12 bg-[#E6EBEA]">
              <ArchitecturalImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                caption="Commercial Facilities — Oklahoma City"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#E6EBEA]/55 border border-[#17262D]/12">
              <h2 className="font-display text-lg font-semibold text-[#17262D]">
                Published Business Commitments
              </h2>
              <ul className="mt-4 space-y-2.5">
                {PUBLISHED_TRUST_CLAIMS.map((claim) => (
                  <li
                    key={claim.title}
                    className="flex items-start gap-2.5 text-sm text-[#17262D]/85"
                  >
                    <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                    <span>{claim.title}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 pt-4 border-t border-[#17262D]/10 text-xs text-[#6C8790]">
                Statements reflect published company policies; insurance details may be
                requested directly prior to onboarding.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#17262D]/12 border-t border-b border-[#17262D]/12">
            {pillars.map((pillar) => (
              <div key={pillar.index} className="py-7 first:pt-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-[#6C8790] tabular-nums">
                    {pillar.index}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-[#17262D]">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-base text-[#17262D]/80 leading-relaxed pl-7">
                  {pillar.body}
                </p>
              </div>
            ))}

            <div className="py-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestWalkthrough}
                className="px-6 py-3.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors cursor-pointer"
              >
                Request Your Free Walkthrough
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 border border-[#17262D]/20 text-[#17262D] text-sm font-semibold hover:bg-[#E6EBEA] transition-colors cursor-pointer"
              >
                Contact Our Oklahoma City Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage: React.FC<{
  onRequestWalkthrough: () => void;
  onNavigate: (page: PageId) => void;
}> = ({ onRequestWalkthrough, onNavigate }) => {
  return (
    <div>
      <PageHeader
        kicker="Contact · Oklahoma City, Oklahoma"
        title="Speak Directly With Our Commercial Cleaning Team."
        subtitle="Connect with Spotless Society by phone or email, or request a complimentary on-site facility walkthrough across the Oklahoma City metro."
        onBackHome={() => onNavigate('home')}
      />

      <section className="py-16 sm:py-24 bg-[#FAFBFA] border-b border-[#17262D]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 bg-white border border-[#17262D]/12 space-y-6">
              <div>
                <div className="text-xs font-medium text-[#6C8790]">Company Location</div>
                <div className="font-display text-xl font-semibold text-[#17262D] mt-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#123C4A]" />
                  <span>{BUSINESS_INFO.location}</span>
                </div>
                <p className="mt-1.5 text-sm text-[#17262D]/75">
                  Serving commercial properties {BUSINESS_INFO.serviceRadiusNote.toLowerCase()}.
                </p>
              </div>

              <div className="pt-5 border-t border-[#17262D]/10">
                <div className="text-xs font-medium text-[#6C8790]">Phone</div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="mt-1 inline-flex items-center gap-2 font-display text-xl font-semibold text-[#123C4A] hover:text-[#17262D] tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-[#17262D]/10">
                <div className="text-xs font-medium text-[#6C8790]">Email</div>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="mt-1 inline-flex items-center gap-2 font-display text-lg font-semibold text-[#123C4A] hover:text-[#17262D] break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-[#17262D]/10">
                <div className="text-xs font-medium text-[#6C8790]">
                  Published Contact Hours
                </div>
                <div className="mt-1 flex items-start gap-2 text-sm font-semibold text-[#17262D]">
                  <Clock className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.contactHours}</span>
                </div>
                <p className="mt-2 text-xs text-[#17262D]/75 leading-relaxed">
                  Cleaning appointments can be arranged outside normal contact hours—including
                  evenings, early mornings, and weekends—depending on your facility’s needs.
                </p>
              </div>
            </div>

            <div className="p-7 bg-[#E6EBEA]/55 border border-[#17262D]/12">
              <h2 className="font-display text-lg font-semibold text-[#17262D]">
                What Happens Next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-[#17262D]/85">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#123C4A] mt-0.5 tabular-nums">
                    01
                  </span>
                  <span>
                    Inquiries typically receive a response within one business day during
                    published contact hours.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#123C4A] mt-0.5 tabular-nums">
                    02
                  </span>
                  <span>
                    Complimentary on-site walkthroughs are typically scheduled within 48 hours.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#123C4A] mt-0.5 tabular-nums">
                    03
                  </span>
                  <span>
                    We review scope, access, and scheduling preferences to provide a tailored
                    commercial cleaning plan.
                  </span>
                </li>
              </ol>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={onRequestWalkthrough}
                  className="w-full py-3 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors cursor-pointer"
                >
                  Open Walkthrough Request Form
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Quick Walkthrough Form */}
          <div className="lg:col-span-7">
            <WalkthroughForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export const WalkthroughPage: React.FC<{
  prefill?: WalkthroughPrefill;
  onNavigate: (page: PageId) => void;
}> = ({ prefill, onNavigate }) => {
  return (
    <div>
      <PageHeader
        kicker="Complimentary Commercial Assessment · Oklahoma City Metro"
        title="Request Your Free On-Site Walkthrough."
        subtitle="Share a few details about your commercial property. Don’t know your square footage? Leave it blank—we confirm dimensions and priorities during your walkthrough."
        onBackHome={() => onNavigate('home')}
      />

      <section className="py-16 sm:py-24 bg-[#E6EBEA]/45">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <WalkthroughForm prefill={prefill} />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#17262D] text-[#FAFBFA]">
              <div className="text-xs text-[#B8A185] font-medium">Direct Line</div>
              <h2 className="font-display text-xl font-semibold mt-1">
                Prefer to Schedule by Phone?
              </h2>
              <p className="mt-2 text-sm text-[#E6EBEA]/80 leading-relaxed">
                Call our Oklahoma City team directly between {BUSINESS_INFO.contactHours}.
              </p>
              <div className="mt-5 space-y-2.5">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full py-3 px-4 bg-[#B8A185] text-[#17262D] text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#FAFBFA] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="w-full py-3 px-4 border border-[#FAFBFA]/20 text-[#FAFBFA] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#FAFBFA]/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B8A185]" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#FAFBFA] border border-[#17262D]/12 space-y-4">
              <h3 className="font-display text-base font-semibold text-[#17262D]">
                Typical Inquiry Expectations
              </h3>
              <ul className="space-y-2.5 text-sm text-[#17262D]/80">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                  <span>Responses typically within one business day.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                  <span>Walkthroughs typically scheduled within 48 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
                  <span>Exclusively commercial facilities—no residential cleaning.</span>
                </li>
              </ul>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-[#17262D]/12 bg-[#E6EBEA]">
              <ArchitecturalImage
                src={OFFICE_IMAGE.src}
                alt={OFFICE_IMAGE.alt}
                caption="Commercial Facility Walkthrough"
                className="w-full h-full object-cover"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export const IndustriesPage: React.FC<{
  onNavigate: (page: PageId) => void;
  onRequestWalkthrough: (prefill?: WalkthroughPrefill) => void;
}> = ({ onNavigate, onRequestWalkthrough }) => (
  <div>
    <PageHeader
      kicker="Commercial Sectors · Oklahoma City Metro"
      title="Industries We Serve Across Commercial Environments."
      subtitle="Spotless Society supports corporate offices, medical clinics, retail showrooms, multi-tenant properties, and commercial common areas—exclusively B2B."
      onBackHome={() => onNavigate('home')}
    />
    <IndustriesSection
      onDiscussFacility={(prefill) => onRequestWalkthrough(prefill)}
      onViewService={(page) => onNavigate(page)}
    />
  </div>
);

export const OurApproachPage: React.FC<{
  onNavigate: (page: PageId) => void;
  onRequestWalkthrough: () => void;
}> = ({ onNavigate, onRequestWalkthrough }) => (
  <div>
    <PageHeader
      kicker="Methodology & Oversight"
      title="Structured Processes. Consistent Commercial Teams."
      subtitle="Discover how Spotless Society pairs dedicated crews with a four-step onboarding sequence and ongoing quality-control audits."
      onBackHome={() => onNavigate('home')}
    />
    <ConsistencyAndProcessSection
      onRequestWalkthrough={onRequestWalkthrough}
      onNavigate={onNavigate}
    />
    <TrustAndQualitySection
      onRequestWalkthrough={onRequestWalkthrough}
      onNavigate={onNavigate}
    />
  </div>
);

export const ServiceAreasPage: React.FC<{
  onNavigate: (page: PageId) => void;
  onRequestWalkthrough: (prefill?: WalkthroughPrefill) => void;
}> = ({ onNavigate, onRequestWalkthrough }) => (
  <div>
    <PageHeader
      kicker="Oklahoma City Metro Coverage"
      title="Serving Commercial Properties Within ~30 Driving Miles of OKC."
      subtitle="Select any metro municipality or check your facility ZIP code to begin confirming service availability."
      onBackHome={() => onNavigate('home')}
    />
    <ServiceAreasSection
      onConfirmAvailability={(prefill) => onRequestWalkthrough(prefill)}
    />
  </div>
);

export const FaqsPage: React.FC<{
  onNavigate: (page: PageId) => void;
  onRequestWalkthrough: () => void;
}> = ({ onNavigate, onRequestWalkthrough }) => (
  <div>
    <PageHeader
      kicker="Policies, Scope & Logistics"
      title="Frequently Asked Questions."
      subtitle="Clear answers regarding commercial-only eligibility, walkthrough scheduling, after-hours service, supplies, and quality control."
      onBackHome={() => onNavigate('home')}
    />
    <FaqSection onRequestWalkthrough={onRequestWalkthrough} />
  </div>
);
